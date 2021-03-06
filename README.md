
Autor: Lucas Dórdolo - 2020

# Introduccion
El proyecto es una aplicación WEB desarrollada como trabajo final de la materia Desarrollo de Aplicaciones Multiplataforma en el marco del curso en especialización en Internet de las cosas de de FI-UBA.

Consiste en un Front-End hecho con Ionicy el Back-End en Node-JS.

La aplicación genera una lista de dispositivos de forma dinámica haciendo una consulta a la base de datos. Permite visualizar un valor ficticio de presión y almacenar el log de los mismos.



# Correr la aplicación
Para correr la aplicación es necesario clonar el repositorio en la ubicación deseada:
```sh
git clone https://github.com/lucasd92/TP_DAM
cd TP_DAM
```
Luego correr el script para instalar docker y todas sus dependencias en Ubuntu 18(son necesarios atributos de root):
```sh
./run.sh -i
```
Para otras versiones de Ubuntu puede especificar la versión (soportados 20, 19, 18,17,16 y 14):
```sh
./run.sh -v 17 -i
```
Si tuviera problemas para ejecutar el script, puede deberse a que no posee permisos de ejecución. Por lo que antes debe escribir el comando:
```sh
chmod +x run.sh
```
De seguir teniendo errores, visite la documentación oficial: https://docs.docker.com/engine/install/ubuntu/

El paso siguiente es instalar todos los contenedores que necesita la aplicación. Para eso escriba:
```sh
./run.sh -c
```
Para más información puede acceder a: https://iot-es.herokuapp.com/post/details/6

Finalmente para correr la aplicación puede simplemente ejecutar
```sh
./run.sh
```
En ese caso se utilizarán los puertos por defecto. Si quisiera modificarlos puede hacerlo de la siguiente manera:
```sh
./run.sh -p 8085 -j 3000
```
Donde -p identifica el puerto del servidor PHPMyAdmin y -j el puerto del servidor NodeJS.
La aplicación WEB se levanta en http://localhost:8100 y el servidor PHPMyAdmin se accede desde http://localhost:8085 con usuario root y contraseña userpass 



# Contribuir
Para contribuir realizar un pull request con las sugerencias.
# Licencia
GPL
