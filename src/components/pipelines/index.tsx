import { useState, useEffect } from 'react';
import PipelinesResponse from '../../@types/pipelines';
import api from "../../api";

function Pipeline() {
    const [response, setResponse] = useState({} as PipelinesResponse);

    useEffect(() => {
        api.get<PipelinesResponse>('pipelines').then((r) => {
            debugger;
            setResponse(r.data);
        })
    }, []);

    return <div className="row">
        <div className="col-lg-3">
            <div className="ibox">
                <div className="ibox-title">
                    <div className="ibox-tools">
                        <span className="label label-primary float-right">Status</span>
                    </div>
                    <h5>Host:</h5> <span>{response.host}</span>
                </div>
                <div className="ibox-content">
                    {/* <h1 className="no-margins">40 886,200</h1> */}
                    <div>
                        <div className="stat-percent font-bold text-success">{response.version} <i className="fa fa-inbox"></i></div>
                        <small>Version</small>
                    </div>
                    <div>
                        <div className="stat-percent font-bold text-success">{response.http_address} <i className="fa fa-wifi"></i></div>
                        <small>Http address</small>
                    </div>

                </div>
                <div className="ibox-footer">
                    <h5>Pipeline</h5>
                    <div>
                        <div className="stat-percent font-bold text-success">{response.pipelines?.main?.workers} <i className="fa fa-gears"></i></div>
                        <small>Workers</small>
                    </div>
                    <div>
                        <div className="stat-percent font-bold text-success">{response.pipelines?.main?.batch_size} <i className="fa fa-fire"></i></div>
                        <small>Batch size</small>
                    </div>
                    <div>
                        <div className="stat-percent font-bold text-success">{response.pipelines?.main?.batch_delay} <i className="fa fa-clock-o"></i></div>
                        <small>Batch delay</small>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Pipeline;