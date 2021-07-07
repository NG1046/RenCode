
document.getElementById("ClearEditor").addEventListener("click", () => {

    Swal.fire({
        title: 'Warning',
        text: "Are you sure you want to clear the editor?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Do it',
        cancelButtonText: 'No, Cancel',
        reverseButtons: false
    }).then((result) => {
        if (result.isConfirmed) {

            Monaco_setCode("");

            Swal.fire(
                'Completed',
                'Successfully Clear Editor.',
                'success'
            );
            lastAction_Info("Successfully Clear Editor.")
        }else{
            lastAction_Info("[Canceled] Clear Editor")
        }
    })

}, false)