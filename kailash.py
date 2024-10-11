from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

# Home page route
@app.route('/')
def index():
    return render_template('index.html')

# Blog page route
@app.route('/blog')
def blog():
    return render_template('blog.html')

# Individual blog post route (example post1)
@app.route('/blog/post1')
def post1():
    return render_template('post1.html')

# Resume download route
@app.route('/resume_download')
def resume_download():
    return send_from_directory('resume', 'kailash_resume.pdf')

if __name__ == "__main__":
    app.run(debug=True)
