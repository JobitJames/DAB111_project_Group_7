# DAB111_project_Group_7

Project_Python/
|-- app.py                # Flask application
|-- database_connection.ipynb  # Notebook for database operations
|-- Canada_climatedataset.db   # SQLite database
|-- selected_stations.csv      # Dataset used for the project
|-- static/                # Static assets (CSS, JS, images)
|-- templates/             # HTML templates


# Climate Station Data Project

This project is a simple Flask-based web application that collects and displays climate station data from Canada.

## Features

- **Data Collection**: Data is loaded from a CSV file and stored in an SQLite database.
- **Database**: Climate station data is stored in a single SQLite table.
- **Website**:
  - **Home Page**: Brief overview of the application.
  - **About Data Page**: Provides information about the dataset, its source, and the definitions of the variables.
  - **Data Page**: Displays the data from the database in a table format with sorting and filtering features.
  - **Team Page**: Introduces the project team members.

## Dataset

The dataset contains climate station information, including:
- **x**: Longitude of the station.
- **y**: Latitude of the station.
- **STN_ID**: Unique identifier for each station.
- **STATION_NAME**: Name of the station.
- **PROV_STATE_TERR_CODE**: Province or territory code.
- **ELEVATION**: Elevation above sea level (meters).
- **first_year**: Year when data collection started.
- **last_year**: Year when data collection ended.

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-link>
   cd Project_Python


2. Install the required packages:
    pip install 
    ```bash
    -r requirements.txt

3. Run the Flask app:
    ```bash
      python app.py


Open the web application in your browser at 
http://127.0.0.1:5000/.


Requirements
- Python 3.7+
- Flask
- SQLite
- Pandas


