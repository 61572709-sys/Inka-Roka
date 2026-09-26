const inpNombre = document.getElementById('input-nombre');
const inpEmail = document.getElementById('input-email');
const inpMensaje = document.getElementById('input-mensaje');

async function enviardatos() 
{
    const nombre = inpNombre.value;
    const email = inpEmail.value;
    const mensaje = inpMensaje.value;

    if (!nombre || !email || !mensaje) 
    {
        alert('Inka Roca - Artesanía\n\nPor favor rellene todos los campos');
        return;
    }

    alert('Inka Roca - Artesanía\n\nDatos enviados correctamente');
    document.getElementById('input-nombre').value = "";
    document.getElementById('input-email').value = "";
    document.getElementById('input-mensaje').value = "";
}


