import styles from "@/app/styles/common.module.css";
const Loading = () => {
  return (
    <section className={styles.loading_section}>
      <div className={styles.loading}>
        {/* <video autoPlay muted loop playsInline className="mp4-loader-video" id="loadingvideoframe">
          <source src="loadervideo.mp4" type="video/mp4" />
        </video> */}
      </div>
    </section>
  );
};

export default Loading;
