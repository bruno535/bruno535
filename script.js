<script>
    setInterval(() => {
    const data = new Date
    let hora = data.toLocaleTimeString()
    let h1 = document.querySelector('.h1')

    h1.textContent=hora
}, 1000);
</script>
