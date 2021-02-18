import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function SocialIcons({ flexDirection }) {

  let styles = {
    container: {
      display: 'flex',
      flexDirection: flexDirection,
    },
    link: {
      color: "white",
      margin: "0px 20px",
      fontFamily: 'inherit'
    }
  }
  
  return (
    <div style={styles.container}>
      <a href="https://www.facebook.com/thefloorisyoursdancecntr/?modal=admin_todo_tour" target="_blank" rel="noreferrer noopener">
          <FacebookIcon style={styles.link} fontSize="large"/>
      </a>
      <a href="https://www.instagram.com/thefloorisyoursdancecntr/" target="_blank" rel="noreferrer noopener">
          <InstagramIcon style={styles.link} fontSize="large"/>
      </a>
    </div>
  )
}

export default SocialIcons;