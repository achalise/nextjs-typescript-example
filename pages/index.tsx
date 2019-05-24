import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import Prices from "../components/Prices";
import currentprice from '../services/prices-service';

const Index = (props: any) => (
    <Layout>
        <div>
            <p>Welcome to Home</p>
            <Prices bpi={props.bpi}/>
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const data = await currentprice();
    return {
        bpi: data.bpi
    };
};

export default Index;