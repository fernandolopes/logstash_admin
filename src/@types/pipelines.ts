interface Pipeline {

    workers: number;
    batch_size: number;
    batch_delay: number;
}

interface PipelineMain {

    ephemeral_id: string;
    hash: string;
    workers: number;
    batch_size: number;
    batch_delay: number;
    config_reload_automatic: boolean;
    config_reload_interval: number;
    dead_letter_queue_enabled: boolean;
}

interface Pipelines {

    ".monitoring-logstash": any;
    main: PipelineMain;
}

interface PipelinesResponse {

    host: string;
    version: string;
    http_address: string;
    id: string;
    name: string;
    ephemeral_id: string;
    status: string;
    snapshot: string;
    pipeline: Pipeline;
    pipelines: Pipelines;
}

export default PipelinesResponse;