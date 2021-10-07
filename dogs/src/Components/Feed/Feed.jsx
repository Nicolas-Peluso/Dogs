import React from 'react'
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeddModal";

function Feed({ user }) {
    const [pages, setPages] = React.useState([1])
    const [infinite, setInfinite] = React.useState(true)

    React.useEffect(() => {
        let wait = false
        function infinitScroll() {
            if (infinite) {
                const scorll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;

                if (scorll > height * 0.75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true

                    setTimeout(() => {
                        wait = false
                    }, 500);
                };
            };
        };

        window.addEventListener("wheel", infinitScroll)
        window.addEventListener("scroll", infinitScroll)
        return () => {
            window.removeEventListener("wheel", infinitScroll)
            window.removeEventListener("scroll", infinitScroll)
        };
    }, [infinite])

    const [ModalPhoto, setModalPhoto] = React.useState(null)
    return (
        <section>
            {ModalPhoto && <FeedModal foto={ModalPhoto} setModal={setModalPhoto} />}

            {pages.map(pagi => (
                <FeedPhotos setModalPhoto={setModalPhoto}
                    setInfinite={setInfinite} page={pagi} user={user}
                    key={pagi}
                />
            ))}
        </section>
    )
}

export default Feed
