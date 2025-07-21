use {
    crate::commands::{FromClapArgMatches, Result},
    clap::{value_t, ArgMatches},
    solana_send_transaction_service::send_transaction_service::Config as SendTransactionServiceConfig,
};

impl FromClapArgMatches for SendTransactionServiceConfig {
    fn from_clap_arg_match(matches: &ArgMatches) -> Result<Self> {
        Ok(SendTransactionServiceConfig {
            retry_rate_ms: value_t!(matches, "rpc_send_transaction_retry_ms", u64)?,
            batch_size: value_t!(matches, "rpc_send_transaction_batch_size", usize)?,
            ..Default::default()
        })
    }
}

#[cfg(test)]
mod tests {
    use {
        super::*,
        crate::commands::run::args::{
            tests::verify_args_struct_by_command_run_with_identity_setup, RunArgs,
        },
    };

    #[test]
    fn verify_args_struct_by_command_run_with_retry_rate_ms() {
        let default_run_args = RunArgs::default();
        let expected_args = RunArgs {
            send_transaction_service_config: SendTransactionServiceConfig {
                retry_rate_ms: 99999,
                ..default_run_args.send_transaction_service_config.clone()
            },
            ..default_run_args.clone()
        };
        verify_args_struct_by_command_run_with_identity_setup(
            default_run_args,
            vec!["--rpc-send-retry-ms", "99999"],
            expected_args,
        );
    }

    #[test]
    fn verify_args_struct_by_command_run_with_batch_size() {
        let default_run_args = RunArgs::default();
        let expected_args = RunArgs {
            send_transaction_service_config: SendTransactionServiceConfig {
                batch_size: 9999,
                ..default_run_args.send_transaction_service_config.clone()
            },
            ..default_run_args.clone()
        };
        verify_args_struct_by_command_run_with_identity_setup(
            default_run_args,
            vec!["--rpc-send-batch-size", "9999"],
            expected_args,
        );
    }
}
