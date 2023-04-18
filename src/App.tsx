import TVFrame from './components/tv/TVFrame'
import githubLogo from './assets/images/GitHub_Logo_White.png'
import linkedinLogo from './assets/images/linkedin.png'
import colorBars from './assets/images/SMPTE_Color_Bars.svg.png'
import tvStatic from './assets/images/static.gif'
import resumeIcon from './assets/images/resume-icon.png'
import codeIcon from './assets/images/codeicon.png'
import myFace from './assets/images/about-icon.jpg'
import Resume from './assets/Resume.pdf'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react'

function App() {
  const channels = [
    {
      name: 'github',
      image: githubLogo,
      link: 'https://github.com/cobbettn',
      description: 'My Github',
    },
    {
      name: 'linkedin',
      image: linkedinLogo,
      link: 'https://www.linkedin.com/in/nathan-cobbett/',
      description: 'LinkedIn'
    },
    {
      name: 'resume',
      image: resumeIcon,
      link: Resume,
      description: 'My Resume'
    },
    {
      name: 'bio',
      image: myFace,
      description: 'About me',
      action: () => handleOpen()
    },

    {
      name: 'code',
      image: codeIcon,
      link: 'https://github.com/cobbettn/cobbettn.github.io',
      description: 'Code for this webpage'
    },
    {
      name: 'in progress',
      image: colorBars,
      description: 'in progress'
    },
    null,
    null,

    null,
    null,
    null,
    null,

    null,
    null,
    null,
    null,
  ]

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="grid-container">
        { 
          channels.map((channel, i) => (
            <TVFrame channel={channel ?? {name: '', description: ''}}  key={`channel-${i}`}>
              <img 
              className='channelImage' 
              src={channel?.image ?? tvStatic} 
              alt={channel?.description}
              title={channel?.description} />
            </TVFrame>
          )) 
        }
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            About me
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Bio goes here...
          </Typography>
        </Box>
      </Modal>
    </>
  
  )
}

export default App
