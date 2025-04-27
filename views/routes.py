from flask import Blueprint, render_template, request, redirect, url_for
from datetime import datetime

# Create blueprint
bp = Blueprint('main', __name__)

# Routes
@bp.route('/')
def index():
    return render_template('index.html', now=datetime.now())

@bp.route('/services')
def services():
    return render_template('services.html', now=datetime.now())

@bp.route('/showcase')
def showcase():
    return render_template('showcase.html', now=datetime.now())

@bp.route('/project-planner')
def project_planner():
    return render_template('project_planner.html', now=datetime.now())

# Add error handlers
@bp.app_errorhandler(404)
def page_not_found(e):
    return render_template('404.html', now=datetime.now()), 404

@bp.app_errorhandler(500)
def internal_server_error(e):
    return render_template('500.html', now=datetime.now()), 500