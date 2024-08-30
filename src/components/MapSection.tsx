const MapSection = () => {
    return (
        <section className='relative md:pb-20'>
            <div className='max-w-[96%] mx-auto'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1308657737544!2d67.00113681538733!3d24.86073488405795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f7f75194099%3A0x4bf92a7b8f037deb!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1614183062042!5m2!1sen!2s"
                    width="100%"
                    height="450px"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    )
}

export default MapSection