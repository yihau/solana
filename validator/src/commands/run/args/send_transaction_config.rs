use {
    crate::commands::{FromClapArgMatches, Result},
    clap::{value_t, ArgMatches},
    solana_send_transaction_service::send_transaction_service::Config as SendTransactionServiceConfig,
};

impl FromClapArgMatches for SendTransactionServiceConfig {
    fn from_clap_arg_match(matches: &ArgMatches) -> Result<Self> {
        Ok(SendTransactionServiceConfig {
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
}
