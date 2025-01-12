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
