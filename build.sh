#!/bin/bash

# Nombre de la imagen Docker (en minúsculas)
IMAGE_NAME="portafoliochayo"

# Paso 1: Construye la imagen Docker
echo "Construyendo la imagen Docker..."
docker build -t $IMAGE_NAME .

# Paso 2: Ejecuta el contenedor
echo "Ejecutando el contenedor..."
docker run -d -p 80:80 --name mi-sitio-web $IMAGE_NAME

echo "El sitio web está corriendo en http://localhost"

