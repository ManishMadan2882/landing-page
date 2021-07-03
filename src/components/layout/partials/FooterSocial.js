import React from 'react'
import classNames from 'classnames'

const FooterSocial = ({ className, ...props }) => {
  const classes = classNames('footer-social', className)

  return (
    <div {...props} className={classes}>
      <ul className='list-reset'>
        <li>
          <a href='https://www.facebook.com/PBDSCE/'>
            <svg
              clip-rule='evenodd'
              fill-rule='evenodd'
              height='40'
              width='40'
              stroke-linejoin='round'
              stroke-miterlimit='2'
              viewBox='-89.00934757 -46.8841404 643.93723344 446.8841404'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='m154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1 -64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504a100.739 100.739 0 0 0 -13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1 -45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1 -26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1 -24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359'
                fill='#6163FF'
                fill-rule='nonzero'
              />
            </svg>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/company/point-blank-d/mycompany/'>
            <svg
              height='30'
              width='30'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 256'
            >
              <g fill='none'>
                <path
                  d='M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z'
                  fill='#6163FF'
                />
                <path
                  d='M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z'
                  fill='#fff'
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/pointblank_dsce/'>
            <svg
              width='30'
              height='30'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Instagram</title>
              <g>
                <circle cx='12.145' cy='3.892' r='1' />
                <path d='M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z' />
                <path d='M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z' />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterSocial
