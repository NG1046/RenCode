
document.getElementById("ClearEditor").addEventListener("click", () => {

    Swal.fire({
        title: 'Babala',
        text: "Sigurado ka bang nais mong limasin ang editor?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oo gawin mo',
        cancelButtonText: 'Hindi, Kanselahin',
        reverseButtons: false
    }).then((result) => {
        if (result.isConfirmed) {

            Monaco_setCode("");

            Swal.fire(
                'Nakumpleto',
                'Matagumpay na Malinaw ang Editor.',
                'success'
            );
            lastAction_Info("Matagumpay na Malinaw ang Editor.")
        }else{
            lastAction_Info("[Nakansela] I-clear ang Editor")
        }
    })

}, false)