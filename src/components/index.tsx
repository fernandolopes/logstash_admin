import './index.css';
import Menu from './template/menu';
import Header from './template/header';
import Body from './template/body';
import Footer from './template/footer';

// eslint-disable-next-line
export default () => {

    return (
        <div id="wrapper">
            <Menu />
            <div id="page-wrapper" className="gray-bg" style={{ width: '100%' }}>
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    );
};