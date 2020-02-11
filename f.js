function nom(n) {

    nombre = $("#img" + n + "").attr("src");
    nombre = nombre.split("../images/");
    console.log(nombre[1]);


    $("#imagen").dropzone({
        url: "cambiarImagen.php?s1=" + n + "&s2=" + nombre[1] + "",
        dictDefaultMessage: "Arrastre la imágen aquí para subir o haz clic.",
        autoProcessQueue: false,
        maxFilesize: 2000,
        parallelUploads: 5,
        maxFiles: 1,
        addRemoveLinks: true,
        dictRemoveFile: "×",
        acceptedFiles: "image/*"

    });


}