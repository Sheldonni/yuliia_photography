from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('contakt.html')

@app.route('submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        firstname = request.form['firstname']
        lastname = request.form['lastname']
        subject = request.form['subject']
        email = request.form['email']
        adres = request.form['adres']
        phone = request.form['phone']
        textarea = request.form['textarea']

        print(f'First Name: {firstname}, Last Name: {lastname}')
        print(f'Subject: {subject}, Email: {email}')
        print(f'Adres: {adres}, Phone: {phone}')
        print(f'Message: {textarea}')

        # Тут ви можете зберегти отримані дані у базу даних або виконати інші необхідні дії.

        return 'Form submitted successfully!'

if __name__ == '__main__':
    app.run(debug=True)
