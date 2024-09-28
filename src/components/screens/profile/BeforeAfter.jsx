import styles from './Profile.module.scss'

const BeforeAfter = () => {
  return (
      <div
          className='wrapper-inner-page'
          style={{ paddingLeft: 0, paddingRight: 0 }}
      >
          <div className={styles.before_after}>
              <div>
                  <div className={styles.heading}>Before</div>
                  <img src='public\before.jpg' alt='' />
              </div>
              <div>
                  <div className={styles.heading}>After</div>
                  <img src='public\after.jpg' alt='' />
              </div>
          </div>
      </div>
	)
}

export default BeforeAfter