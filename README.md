# PORTFOLIO HAIR&MAKEUP ARTIST

## 🚀 Comando de arranque
    npm run dev

---

## 🛠️ Stack

	🔵 React & React DOM 
	🔵 Vite 

---

## 🌐 Integraciones

    🟩 Cloudinary -> almacenamiento de imágenes
    🟩 EmailJS -> envío de formularios de contacto

---

## 🖼️ Funcionalidades

- Menú principal con acceso a:
  
  - Galerías por temática
  - Formulario de contacto
  - Biografía / información personal
  
- Cada galería es una **página independiente** para mejorar la organización y navegación.
- **Carga rápida** de imágenes para una mejor experiencia de usuario.
- Preparado para escalabilidad futura (ej. sección de cursos).

---


### 📌 Gallery & Hooks
- `useState` → para controlar cuál imagen está activa (`activeIndex`) y permitir que se abra/cierre al hacer click.
  
- `useIsSmartphone` (custom hook) → detecta si el usuario está en un dispositivo móvil, para cambiar el comportamiento de la galería y añadir overlays de cierre.

### Reutilización
- `Gallery` como componente reutilizable en múltiples páginas de galería sin modificar el código.  
- Solo necesitas pasarle un array de items con la información de la imagen/video y el caption.


---


## 📜 Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)

Este proyecto se publica únicamente con fines demostrativos como parte de mi portfolio y pertenece a la web de la maquilladora.
Puedes ver, compartir y aprender del código, pero no está permitido su uso comercial ni la redistribución sin autorización.
