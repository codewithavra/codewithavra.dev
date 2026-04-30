/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

const Globe = () => {
  return (
    <div className='bdr-box mx-auto h-fit max-w-3xl border-x p-2'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231247207!2d88.26495159474996!3d22.53540637483547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1777534332040!5m2!1sen!2sin'
        width='100%'
        height='200'
        style={{ border: '0' }}
        loading='lazy'
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Globe;
