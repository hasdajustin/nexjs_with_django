# Next.js + Django(DRF)

A basic blog application built with **Next.js** for the frontend and **Django REST Framework (DRF)** for the backend. Blog posts are fetched using **Axios** from the Django API and displayed using **Tailwind CSS** for a clean, responsive UI.

##  Features

-  REST API using Django + DRF
-  Modern frontend with Next.js 13+
-  Tailwind CSS for responsive, elegant design
-  Axios for API communication
-  Reusable component structure
-  CORS-configured backend for secure API access

## Tech Stack
| **Frontend** | **Backend** | **Tools & Utilities** |
|--------------|-------------|------------------------|
| Next.js      | Django      | Axios                  |
| Tailwind CSS | DRF         | VS Code, Git           |


## How to Run This Project
- Make sure the following are installed on your machine:
- Python
- Node.js and npm

```python
git clone https://github.com/hasdajustin/nexjs_with_django.git
```
```python
cd nexjs_with_django
```
### Backend Setup
```python
cd backend
```
```python
pip install -r requirements.txt
```
```python
python manage.py makemigrations
```
```python
python manage.py migrate
```
```python
python manage.py createsuperuser
```
```python
python manage.py runserver
```
### Admin Panel:
- Visit: http://127.0.0.1:8000/admin/
- Login with the superuser credentials you just created.
### API Endpoint:
- Visit: http://127.0.0.1:8000/api/blogs/
- You'll see JSON data of products.

### Frontend Setup
```python
cd frontend
```
```python
npm install
```
```python
npm run dev
```
### Visit the frontend in your browser::
- http://localhost:3000

**Now, data added from the admin panel or backend will show automatically on the Next.js frontend.**
