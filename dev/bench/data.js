window.BENCHMARK_DATA = {
  "lastUpdate": 1720549654257,
  "repoUrl": "https://github.com/yihau/solana",
  "entries": {
    "bench-solana-runtime": [
      {
        "commit": {
          "author": {
            "email": "yihau.chen@icloud.com",
            "name": "yihau",
            "username": "yihau"
          },
          "committer": {
            "email": "yihau.chen@icloud.com",
            "name": "yihau",
            "username": "yihau"
          },
          "distinct": true,
          "id": "e337f297d4ea9d31883990d03f80b229ce4bda32",
          "message": "ci: do benchmark for solana-runtime",
          "timestamp": "2024-07-10T01:51:36+08:00",
          "tree_id": "93f96cda079f9416b12aa69ff3d6f3178be88d69",
          "url": "https://github.com/yihau/solana/commit/e337f297d4ea9d31883990d03f80b229ce4bda32"
        },
        "date": 1720549065237,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 3025211,
            "range": "± 867031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 872695,
            "range": "± 159186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 6985,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 446956,
            "range": "± 6296",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "solana-sdk": [
      {
        "commit": {
          "author": {
            "email": "yihau.chen@icloud.com",
            "name": "yihau",
            "username": "yihau"
          },
          "committer": {
            "email": "yihau.chen@icloud.com",
            "name": "yihau",
            "username": "yihau"
          },
          "distinct": true,
          "id": "cc2aaa18aa610be9e7944bfbfb37f6f1db19c062",
          "message": "ci: add more benchmark",
          "timestamp": "2024-07-10T02:24:31+08:00",
          "tree_id": "06ea4d86ddb5cb912aa5d480a054f0ecc934ae10",
          "url": "https://github.com/yihau/solana/commit/cc2aaa18aa610be9e7944bfbfb37f6f1db19c062"
        },
        "date": 1720549653754,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_set_data_from_slice_changed_100k",
            "value": 2329,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_10mb",
            "value": 502369,
            "range": "± 47512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_1k",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_1mb",
            "value": 42225,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_100k",
            "value": 9782,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_10mb",
            "value": 511604,
            "range": "± 67099",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1k",
            "value": 1052,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1mb",
            "value": 266809,
            "range": "± 4318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_100k",
            "value": 10010,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_10mb",
            "value": 2733529,
            "range": "± 520535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_1mb",
            "value": 265914,
            "range": "± 5617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_100k",
            "value": 35437,
            "range": "± 2350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_10mb",
            "value": 2135581,
            "range": "± 48353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1k",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1mb",
            "value": 202346,
            "range": "± 3584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_032",
            "value": 59472,
            "range": "± 1954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_128",
            "value": 59805,
            "range": "± 2238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_32k",
            "value": 121346,
            "range": "± 1591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_max",
            "value": 182651,
            "range": "± 2061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_032",
            "value": 190188,
            "range": "± 2396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_256",
            "value": 190443,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_32k",
            "value": 283309,
            "range": "± 3627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_max",
            "value": 376856,
            "range": "± 4580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_deserialize",
            "value": 2675,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_serialize",
            "value": 1164,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_construct_instructions_data",
            "value": 311,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize",
            "value": 187,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize_single",
            "value": 48,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_short_vec",
            "value": 234,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_vec",
            "value": 227,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 111756,
            "range": "± 1259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_slot_history_add_new",
            "value": 547336,
            "range": "± 5938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 69516,
            "range": "± 2156",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}