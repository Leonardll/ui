import { getStorage, ref, listAll, getDownloadURL, uploadBytesResumable } from "firebase/storage"

const uploadToFirebase = async (file) => {
    const storage = getStorage()
    const storageRef = ref(storage, "images/1670757504364.jpg")
    const metadata = {
        contentType: "image/jpeg",
    }
    const uploadTask = uploadBytesResumable(file, metadata)
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log("Upload is " + progress + "% done")
            switch (snapshot.state) {
                case "paused":
                    console.log("Upload is paused")
                    break
                case "running":
                    console.log("Upload is running")
                    break
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case "storage/unauthorized":
                    // User doesn't have permission to access the object
                    break
                case "storage/canceled":
                    // User canceled the upload
                    break

                // ...

                case "storage/unknown":
                    // Unknown error occurred, inspect error.serverResponse
                    break
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL)
            })
        }
    )
}

const downloadUrl = () => {
    const storage = getStorage()

    const storageRef = ref(storage, "images/")

    listAll(storageRef).then(async (res) => {
        res.items.forEach(async (itemRef) => {
            // All the items under listRef.
            const url = await getDownloadURL(itemRef)
            //console.log(url)
        })
    })
}

export { uploadToFirebase, downloadUrl }
