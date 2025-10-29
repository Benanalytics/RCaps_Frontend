import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsOfflineExporting from 'highcharts/modules/offline-exporting';
import useSimpleRoutes from 'routes/useSimpleRoutes';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'semantic-ui-css/semantic.min.css'
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);
function App() {

  const routes = useSimpleRoutes("data");

  return (<><div className='ezAppLayout'>{routes}</div>
  <meta name="robots" content="noindex, nofollow" />
  </>);
}

export default App;
