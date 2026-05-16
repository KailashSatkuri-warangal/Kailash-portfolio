import requests
from bs4 import BeautifulSoup

PROFILE_URL = "https://www.coursera.org/user/101b1358acf8aeefe1406fab3a041b75"

headers = {
    "User-Agent": "Mozilla/5.0"
}

html = requests.get(PROFILE_URL, headers=headers).text

soup = BeautifulSoup(html, "html.parser")

links = soup.find_all("a")

with open("coursera_certificates.txt", "w", encoding="utf-8") as f:

    f.write("Certificate Title | Organization | Certificate Link\n\n")

    for link in links:

        href = link.get("href", "")

        if "/learn/" in href or "/professional-certificates/" in href:

            title = link.get_text(strip=True)

            full_link = href if href.startswith("http") else f"https://www.coursera.org{href}"

            line = f"{title} | Coursera | {full_link}\n"

            f.write(line)

print("Saved coursera_certificates.txt")