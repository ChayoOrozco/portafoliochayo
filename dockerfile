# Usa una imagen base de Nginx para servir archivos HTML estáticos
FROM nginx:latest

# Copia el contenido de tu sitio web al directorio predeterminado de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80 para que Nginx pueda servir el sitio
EXPOSE 80
