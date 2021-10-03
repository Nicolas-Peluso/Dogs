import React from 'react'
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeddModal";


function Feed() {
    const [ModalPhoto, setModalPhoto] = React.useState(null)
    return (
        <section>
            {ModalPhoto && <FeedModal foto={ModalPhoto} />}
            <FeedPhotos setModalPhoto={setModalPhoto} />
        </section>
    )
}

export default Feed
