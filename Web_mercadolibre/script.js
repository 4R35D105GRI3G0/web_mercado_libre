document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        console.log(`Buscando: ${e.target.value}`);
        // Aquí puedes agregar funcionalidad adicional para manejar la búsqueda
    });
});
