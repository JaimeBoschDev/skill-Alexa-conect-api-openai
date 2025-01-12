# skill-Alexa-conect-api-openai

Este proyecto es una **Skill personalizada para Alexa** que permite a los usuarios interactuar mediante comandos de voz para obtener información a través de un modelo de inteligencia artificial (OpenAI). El objetivo principal de esta Skill es responder preguntas abiertas de forma natural y mantener conversaciones contextuales.

---

## 🌟 Cómo crear una cuenta en OpenAI y generar una API Key

Para que esta Skill funcione correctamente, necesitas una cuenta en OpenAI y una clave API válida. Aquí tienes una guía paso a paso para configurarla:

### 1. 🖥️ Crear una cuenta en OpenAI
1. Ve al sitio web oficial de OpenAI: [https://platform.openai.com](https://platform.openai.com).
2. Haz clic en **Sign Up** (Registrarse) en la parte superior derecha.
3. Completa el formulario de registro con tu correo electrónico y crea una contraseña segura.
   - También puedes registrarte utilizando una cuenta de Google o Microsoft.
4. Verifica tu dirección de correo electrónico siguiendo las instrucciones enviadas a tu bandeja de entrada.

### 2. 🔑 Generar una clave API
1. Inicia sesión en tu cuenta de OpenAI.
2. En el menú superior, selecciona **API Keys** (Claves API) o ve directamente a [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).
3. Haz clic en el botón **Create new secret key** (Crear nueva clave secreta).
4. Copia la clave generada y guárdala en un lugar seguro.
   - ⚠️ **Importante**: Esta clave solo se muestra una vez. Si la pierdes, deberás generar una nueva.

### 3. 🛠️ Configurar la clave en tu proyecto
1. Ve a tu entorno de desarrollo (AWS Lambda o local).
2. Configura la clave como una variable de entorno con el nombre `OPENAI_API_KEY`.
   - Por ejemplo, en AWS Lambda:
     - Ve a la función Lambda asociada con tu Skill.
     - En la pestaña **Configuration** (Configuración), selecciona **Environment variables** (Variables de entorno).
     - Agrega una nueva clave con el nombre `OPENAI_API_KEY` y pega el valor de tu clave API.

---

🎉 ¡Listo! Ahora tu Skill está configurada para comunicarse con OpenAI y procesar las preguntas de los usuarios.

Si tienes alguna duda durante el proceso, no dudes en consultar la [documentación oficial de OpenAI](https://platform.openai.com/docs/).


---

## 🛠️ Cómo crear una cuenta en Amazon y habilitar el modo desarrollador

Para crear una Skill en Alexa, necesitas una cuenta de Amazon con acceso al modo desarrollador. Sigue estos pasos:

### 1. ✍️ Crear una cuenta en Amazon
1. Ve al sitio web de Amazon Developer: [https://developer.amazon.com](https://developer.amazon.com).
2. Haz clic en **Sign Up** (Registrarse) o **Sign In** (Iniciar sesión) si ya tienes una cuenta de Amazon.
3. Completa el proceso de registro proporcionando la información solicitada.
   - Si ya tienes una cuenta de Amazon, simplemente inicia sesión.

### 2. 🧑‍💻 Acceder al modo desarrollador
1. Una vez dentro del portal de Amazon Developer, selecciona **Alexa** en la barra de navegación superior.
2. Haz clic en **Alexa Skills Kit** para acceder al entorno de desarrollo de Skills.

### 3. 🌟 Crear una Skill
1. Haz clic en el botón **Create Skill** (Crear Skill).
2. Ingresa el nombre de tu Skill (por ejemplo, "Titan Mandíbula") y selecciona el idioma principal.
3. En el tipo de Skill, selecciona **Custom** (Personalizada).
4. Para el método de hosting, selecciona **Alexa-Hosted (Python)**. Esto es gratuito y utilizará un entorno gestionado por Amazon.

### 4. 📝 Configurar el modelo de interacción
1. Ve a la pestaña **Interaction Model** (Modelo de Interacción).
2. Selecciona **JSON Editor**.
3. Copia el archivo `.json` proporcionado en este repositorio y pégalo en el editor.
4. Haz clic en **Build Model** para construir el modelo.

### 5. 🧑‍💻 Configurar el código
1. Ve a la pestaña **Code**.
2. Encontrarás dos archivos principales:
   - `index.py`
   - `requirements.txt`
3. Copia el contenido correspondiente de este repositorio en los archivos indicados.
4. Haz clic en **Deploy** (Desplegar) para implementar tu Skill.

---

🎉 ¡Tu Skill ahora debería estar configurada! Si tienes alguna pregunta o problema durante el proceso, consulta la [documentación oficial de Amazon Alexa](https://developer.amazon.com/en-US/docs/alexa/).

---

## 📱 Cómo habilitar tu Skill en la app de Alexa

Una vez que hayas creado y desplegado tu Skill, sigue estos pasos para habilitarla y probarla:

### 1. 📲 Abre la app de Alexa
1. Descarga e instala la app de Alexa en tu dispositivo móvil desde [Google Play](https://play.google.com/store/apps/details?id=com.amazon.dee.app) o [App Store](https://apps.apple.com/app/amazon-alexa/id944011620), si no la tienes instalada.
2. Inicia sesión con la misma cuenta de Amazon que utilizaste para crear la Skill.

### 2. 🔍 Busca tu Skill
1. En la app de Alexa, toca el menú **Más** en la parte inferior derecha.
2. Selecciona **Skills y Juegos**.
3. En la barra de búsqueda, escribe el nombre de tu Skill (por ejemplo, "Titan Mandíbula").
4. Selecciona tu Skill de los resultados de búsqueda.

### 3. ✅ Habilita la Skill
1. En la página de detalles de la Skill, toca el botón **Habilitar para usar**.
2. Si tu Skill requiere permisos adicionales, otórgalos cuando se te solicite.

### 4. 🗣️ Prueba tu Skill
1. Activa tu Skill diciendo: **"Alexa, abre [Nombre que hayas configurado]"**.
2. Interactúa con tu Skill para asegurarte de que funciona correctamente.

---

🎉 ¡Tu Skill ahora está lista para ser usada! Si tienes algún problema, revisa los pasos anteriores o consulta la [documentación oficial de Amazon Alexa](https://developer.amazon.com/en-US/docs/alexa/).

