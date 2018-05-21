import styles from './css/styles.css';

export default ({ name, staticPath }) =>
  `<div class=${styles.awesome} id="estees">
    Hello ${name}!
    <img src="${staticPath}img/logo.png" />
  </div>
  <script>
  document.getElementById('estees').addEventListener('click', function() {
    window.oc.events.fire('build', ['new name!']);
  });
  </script>
  `;
