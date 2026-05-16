import requests

USERNAME = "satkuri-kailash"

url = f"https://www.credly.com/users/{USERNAME}/badges.json"
url = f"https://www.credly.com/users/{USERNAME}/badges.json"

data = requests.get(url).json()

with open("credly_badges.txt", "w", encoding="utf-8") as f:

    f.write("Badge Title | Issuing Organization | Description | Issuing Date | Verification Link | PNG Image\n\n")

    for badge in data["data"]:

        badge_template = badge.get("badge_template", {})

        title = badge_template.get("name", "N/A")

        issuer = (
            badge_template.get("issuer", {})
            .get("entities", [{}])[0]
            .get("entity", {})
            .get("name", "N/A")
        )

        description = badge_template.get("description", "N/A")

        issue_date = badge.get("issued_at_date", "N/A")

        verify_link = badge.get("public_url", "N/A")

        image = badge_template.get("image_url", "N/A")

        line = f"{title} | {issuer} | {description} | {issue_date} | {verify_link} | {image}\n\n"

        f.write(line)

print("Saved as credly_badges.txt")
