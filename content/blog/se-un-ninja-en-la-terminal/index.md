---
title: "Se Un Ninja En La Terminal Linux"
date: "2022-01-15T22:12:03.284Z"
header: "./cat-keyboard.jpg"
description: " Una guia practica de comandos esenciales para fluir en la terminal y aumentar dramaticamente tu productividad en distros linux. Apto para todo usuario"
---

Sin duda alguna la terminal es lo que mas uso en mi dia a dia como desarrollador de software, lo que en un principio empezo como algo tedioso de aprender para alguien que vino usando un sistemas operativo como Windows, diseñado de manera en que nos cuestionemos la necesidad de usar una consola de comandos, y no es despues que adquieres un poco de practica que empiezas a sentir la necesidad real de aprender a usar la terminal como alternativa perfecta en tus tareas cotidianas en las que generalmente requieren de la GUI y el mouse para poderlas hacer. 

La principal ventaja real que obtenemos al hacer uso de la terminal es la velocidad en la que podemos ejecutar acciones en un tiempo considerablemente menor que desplazarse por la interfaz y hacer clicks. Tambien hay que destacar que hablamos de interactuar directamente con el sistema operativo, por lo que es posible hacer todo desde esta misma a la velocidad del tipeo de nuestros dedos
<br>
> Si los ojos son la ventana al alma, la terminal es la ventana a Linux 


<br>

# Archivos y Navegacion

| Comando         | Descripcion                                                   |
| :-----          | :---------------------------------------                     |
| ls              | Lista todos los documentos y carpetas en el directorio actual|
| ls -l           | Formato largo y mas detallado de "ls"                        |
| ls -la          | Formato detallado que tambien muestra archivos ocultos       |
| mkdir directorio| Crea un nuevo directorio |
| cd nombre/de/directorio | Cambia el directorio actual por la ruta especificada despues de cd| 
| pwd     | Muestra ruta en la que estas actualmente                     |
| rm archivo| Elimina un archivo|
| rm -f archivo| Fuerza la eliminacion de un archivo|
| rm -r | Elimina una carpeta, el contenido de la actual si no especifica|
| rm -rf| Fuerza la eliminacion de un directorio|
| rm -rf / | Boton de autodestruccion|
| cp archivo1 archivo2 |Copia el archivo1 a archivo2|
| mv archivo1 archivo2 |Mueve el archivo1 a archivo2|
| mv archivo1 dir/archivo2 |Mueve el archivo1 a archivo2 en otra carpeta|
| touch archivo | Crea o edita un archivo| 
| cat archivo | Imprime en la terminal el contenido de un archivo| 
| cat estandar > archivo | escribe una entrada estandar  en un archivo| 
| cat estandar >> archivo | añade una entrada estandar al final de un archivo| 
| tail -f archivo | Imprime un archivo en la terminal, pero permite scroll| 

<br>

#   Redes e Internet 


| Comando| Descripcion                                                   |
| :-----  | :---------------------------------------                     |
| ping host| Lista todos los documentos y carpetas en el directorio actual|
| whois dominio| Obtiene informacion WHOIS de un dominio|
| dig dominio| Obtiene DNS de un dominio|
| dig -x host| Hace reverse lookup al DNS|
| wget archivo| Descarga archivo|
| wget -c archivo| Continua una descarga pausada|
| wget -r archivo| Descarga recursiva de archivos de una url|
| curl url| imprime la pagina web de una url|
| curl -o doc.html url | Escribe pagina web de una url en un documento|
| ssh usuario@host | Conecta a un host ssh|
| ssh -p puerto usuario@host | Conecta a un host ssh mediante un puerto especifico|


<br>

#  Gestion de Procesos 


| Comando| Descripcion                                                   |
| :-----  | :---------------------------------------                     |
| ps | Muestra procesos activos|
| ps aux | Muestra los procesos mas detallados|
| kill pid | Cierra un proceso por su ID|
| killall nombre | Cierra todos los procesos con un nombre especifico|

<br>

# Informacion de Sistema 


| Comando| Descripcion                                                   |
| :-----  | :---------------------------------------                     |
| date | Fecha y la hora actual del sistema |
| uptime | El tiempo de actividad de la sesion|
| whoami | Nombre del usuario de la sesion|
| w | Indica cuantas sesiones estan activas |
| cat /proc/cpuinfo | Informacion del cpu|
| cat /proc/meminfo | Informacion de la memoria|
| free | Muestra el uso de memoria RAM y swap |
| du | uso del disco del directorio actual|
| du -sh | Muestra el uso en Gygabytes|
| df | Uso del Disco duro|
| uname -a | Muestra la configuracion del kernel|

<br>

# Compresion de archivos 


| Comando| Descripcion                                                   |
| :-----  | :---------------------------------------                     |
| tar cf archivos.tar archivos | Crea un archivo comprimido|
| tar xf archivo.tar | Descomprime un archivo comprimido|
| tar tf archivo.tar | Muestra el interior de un archivo comprimido|

<br>

# Otros


| Comando| Descripcion                                                   |
| :-----  | :---------------------------------------                     |
| grep patron archivos| busca "patron" en archivos|
| grep -r patron dir/| busqueda recursiva de "patron" en el directorio especificado|
| locate archivo | busca todas las instancias de un archivo|
| whereis aplicacion | muestra lugares donde se ubica una aplicacion|
| man comando| Sin duda el mejor comando para quienes estamos aprendiendo, muestra el manual de un comando|



Intentare actualizar la lista de vez en cuando, pero segun mi experiencia, estos son los comandos que mas frecuentemente uso como usuario de linux desde hace unos años y amante de la terminal. Espero te haya servido para algo y no olvides contactarme en mis redes sociales.

<br>
