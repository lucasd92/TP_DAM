# TP_DAM
Trabajo final de Desarrollo de Aplicaciones Multiplataforma
Autor: Lucas Dórdolo - 2020

Primero debe instalarse Ionic siguiendo las instucciones disponibles en:
https://ionicframework.com/docs/v1/guide/installation.html

Correr la aplicación
Para correr la aplicación es necesario clonar el repositorio en la ubicación deseada:

git clone https://github.com/lucasd92/TP_DAM
cd TP_DAM
Luego correr el script para instalar docker y todas sus dependencias en Ubuntu 18(son necesarios atributos de root):

./run.sh -i
Para otras versiones de Ubuntu puede especificar la versión (soportados 20, 19, 18,17,16 y 14):

./run.sh -v 17 -i
Si tuviera problemas para ejecutar el script, puede deberse a que no posee permisos de ejecución. Por lo que antes debe escribir el comando:

chmod +x run.sh
De seguir teniendo errores, visite la documentación oficial: https://docs.docker.com/engine/install/ubuntu/

El paso siguiente es instalar todos los contenedores que necesita la aplicación. Para eso escriba:

./run.sh -c
Para más información puede acceder a: https://iot-es.herokuapp.com/post/details/6

Finalmente para correr la aplicación puede simplemente ejecutar

./run.sh
En ese caso se utilizarán los puertos por defecto. Si quisiera modificarlos puede hacerlo de la siguiente manera:

./run.sh -p 8085 -j 3000
Donde -p identifica el puerto del servidor PHPMyAdmin y -j el puerto del servidor NodeJS. La aplicación WEB se levanta en http://localhost:8100  y el servidor PHPMyAdmin se accede desde http://localhost:8085 con usuario root y contraseña userpass

Contribuir
Para contribuir realizar un pull request con las sugerencias.

Licencia
GPL
