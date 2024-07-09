window.BENCHMARK_DATA = {
  "lastUpdate": 1720551244424,
  "repoUrl": "https://github.com/yihau/solana",
  "entries": {
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
      },
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
          "id": "89f8aa0617019e1e8fd1dcd4c0d6c14089bce4fe",
          "message": "ci: add deps",
          "timestamp": "2024-07-10T02:35:42+08:00",
          "tree_id": "1e152fe8383dc59eefc3071b0c3bb017b3df8394",
          "url": "https://github.com/yihau/solana/commit/89f8aa0617019e1e8fd1dcd4c0d6c14089bce4fe"
        },
        "date": 1720550341411,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_set_data_from_slice_changed_100k",
            "value": 2313,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_10mb",
            "value": 497298,
            "range": "± 23219",
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
            "value": 46489,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_100k",
            "value": 9886,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_10mb",
            "value": 510914,
            "range": "± 29405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1k",
            "value": 1072,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1mb",
            "value": 272182,
            "range": "± 3812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_100k",
            "value": 9621,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_10mb",
            "value": 2793294,
            "range": "± 30079",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_1mb",
            "value": 274834,
            "range": "± 3758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_100k",
            "value": 35766,
            "range": "± 1901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_10mb",
            "value": 2234537,
            "range": "± 36196",
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
            "value": 212014,
            "range": "± 3884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_032",
            "value": 59494,
            "range": "± 2439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_128",
            "value": 59728,
            "range": "± 1265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_32k",
            "value": 121136,
            "range": "± 1241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_max",
            "value": 182570,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_032",
            "value": 189997,
            "range": "± 1550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_256",
            "value": 190500,
            "range": "± 1983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_32k",
            "value": 283369,
            "range": "± 2313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_max",
            "value": 376899,
            "range": "± 3042",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_deserialize",
            "value": 2730,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_serialize",
            "value": 1167,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_construct_instructions_data",
            "value": 305,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize",
            "value": 185,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize_single",
            "value": 47,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_short_vec",
            "value": 234,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_vec",
            "value": 226,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 111790,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_slot_history_add_new",
            "value": 550408,
            "range": "± 94727",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 68876,
            "range": "± 8888",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "fa271753a8f4dfc01a345c566fef9ad916264ad3",
          "message": "ci: remove bench from buildkite-pipeline",
          "timestamp": "2024-07-10T02:37:18+08:00",
          "tree_id": "d485342fe66fad2e21faa9da4e98a632e7273cea",
          "url": "https://github.com/yihau/solana/commit/fa271753a8f4dfc01a345c566fef9ad916264ad3"
        },
        "date": 1720550436621,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_set_data_from_slice_changed_100k",
            "value": 2326,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_10mb",
            "value": 482112,
            "range": "± 21984",
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
            "value": 46559,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_100k",
            "value": 9785,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_10mb",
            "value": 477678,
            "range": "± 16063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1k",
            "value": 1074,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1mb",
            "value": 271686,
            "range": "± 1285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_100k",
            "value": 9602,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_10mb",
            "value": 2810221,
            "range": "± 32947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_1mb",
            "value": 270953,
            "range": "± 1598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_100k",
            "value": 35085,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_10mb",
            "value": 2130684,
            "range": "± 20509",
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
            "value": 224276,
            "range": "± 2593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_032",
            "value": 59409,
            "range": "± 1154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_128",
            "value": 59691,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_32k",
            "value": 121296,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_max",
            "value": 182686,
            "range": "± 119557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_032",
            "value": 189698,
            "range": "± 2322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_256",
            "value": 189964,
            "range": "± 2721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_32k",
            "value": 282693,
            "range": "± 1977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_max",
            "value": 376269,
            "range": "± 206362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_deserialize",
            "value": 2743,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_serialize",
            "value": 1166,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_construct_instructions_data",
            "value": 306,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize",
            "value": 185,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize_single",
            "value": 47,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_short_vec",
            "value": 232,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_vec",
            "value": 226,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 107012,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_slot_history_add_new",
            "value": 546362,
            "range": "± 6159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 68380,
            "range": "± 570",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "413494e07f39cce8ae49b6fc1241742d2f1350bb",
          "message": "ci: remove bench from buildkite private pipeline",
          "timestamp": "2024-07-10T02:37:52+08:00",
          "tree_id": "1f8c019f7a5937eeb50014137a1df3e996a3627a",
          "url": "https://github.com/yihau/solana/commit/413494e07f39cce8ae49b6fc1241742d2f1350bb"
        },
        "date": 1720550485045,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_set_data_from_slice_changed_100k",
            "value": 2315,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_10mb",
            "value": 461499,
            "range": "± 16896",
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
            "value": 43011,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_100k",
            "value": 10006,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_10mb",
            "value": 457997,
            "range": "± 15155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1k",
            "value": 1079,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1mb",
            "value": 263900,
            "range": "± 3001",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_100k",
            "value": 9770,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_10mb",
            "value": 2681839,
            "range": "± 40640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_1mb",
            "value": 261097,
            "range": "± 3106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_100k",
            "value": 34702,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_10mb",
            "value": 2106402,
            "range": "± 26393",
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
            "value": 206701,
            "range": "± 3695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_032",
            "value": 59473,
            "range": "± 1440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_128",
            "value": 59804,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_32k",
            "value": 121263,
            "range": "± 1062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_max",
            "value": 182531,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_032",
            "value": 189364,
            "range": "± 1535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_256",
            "value": 189835,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_32k",
            "value": 282823,
            "range": "± 1799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_max",
            "value": 376930,
            "range": "± 4825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_deserialize",
            "value": 2690,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_serialize",
            "value": 1177,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_construct_instructions_data",
            "value": 305,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize",
            "value": 189,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize_single",
            "value": 47,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_short_vec",
            "value": 234,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_vec",
            "value": 227,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 107185,
            "range": "± 1122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_slot_history_add_new",
            "value": 547309,
            "range": "± 3801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 68509,
            "range": "± 2840",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "87144a8233c9d1bdf3e26ca5349d424102ecb814",
          "message": "ci: remove useless pipeline script",
          "timestamp": "2024-07-10T02:39:42+08:00",
          "tree_id": "4c55933867ede0cc30600926904a290a5af42cea",
          "url": "https://github.com/yihau/solana/commit/87144a8233c9d1bdf3e26ca5349d424102ecb814"
        },
        "date": 1720550586440,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_set_data_from_slice_changed_100k",
            "value": 2318,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_10mb",
            "value": 488060,
            "range": "± 9463",
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
            "value": 46302,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_100k",
            "value": 9715,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_10mb",
            "value": 483111,
            "range": "± 8799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1k",
            "value": 1064,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1mb",
            "value": 271559,
            "range": "± 2467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_100k",
            "value": 9729,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_10mb",
            "value": 2826043,
            "range": "± 63084",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_1mb",
            "value": 272576,
            "range": "± 3377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_100k",
            "value": 34781,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_10mb",
            "value": 2242405,
            "range": "± 28413",
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
            "value": 214667,
            "range": "± 2469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_032",
            "value": 59481,
            "range": "± 1660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_128",
            "value": 59798,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_32k",
            "value": 121481,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_max",
            "value": 182794,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_032",
            "value": 189125,
            "range": "± 1583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_256",
            "value": 189286,
            "range": "± 2178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_32k",
            "value": 282630,
            "range": "± 2670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_max",
            "value": 376409,
            "range": "± 4623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_deserialize",
            "value": 2721,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_serialize",
            "value": 1163,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_construct_instructions_data",
            "value": 307,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize",
            "value": 185,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize_single",
            "value": 46,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_short_vec",
            "value": 256,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_vec",
            "value": 253,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 111758,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_slot_history_add_new",
            "value": 547036,
            "range": "± 5319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 68515,
            "range": "± 847",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "solana-runtime": [
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
        "date": 1720549876497,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 2539470,
            "range": "± 652623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 751761,
            "range": "± 103801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 6995,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 443976,
            "range": "± 4028",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "89f8aa0617019e1e8fd1dcd4c0d6c14089bce4fe",
          "message": "ci: add deps",
          "timestamp": "2024-07-10T02:35:42+08:00",
          "tree_id": "1e152fe8383dc59eefc3071b0c3bb017b3df8394",
          "url": "https://github.com/yihau/solana/commit/89f8aa0617019e1e8fd1dcd4c0d6c14089bce4fe"
        },
        "date": 1720550585213,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 2765886,
            "range": "± 467033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 770539,
            "range": "± 117557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 7007,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 447924,
            "range": "± 9553",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "fa271753a8f4dfc01a345c566fef9ad916264ad3",
          "message": "ci: remove bench from buildkite-pipeline",
          "timestamp": "2024-07-10T02:37:18+08:00",
          "tree_id": "d485342fe66fad2e21faa9da4e98a632e7273cea",
          "url": "https://github.com/yihau/solana/commit/fa271753a8f4dfc01a345c566fef9ad916264ad3"
        },
        "date": 1720550654455,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 2490431,
            "range": "± 262470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 913660,
            "range": "± 220469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 6941,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 445190,
            "range": "± 3142",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "413494e07f39cce8ae49b6fc1241742d2f1350bb",
          "message": "ci: remove bench from buildkite private pipeline",
          "timestamp": "2024-07-10T02:37:52+08:00",
          "tree_id": "1f8c019f7a5937eeb50014137a1df3e996a3627a",
          "url": "https://github.com/yihau/solana/commit/413494e07f39cce8ae49b6fc1241742d2f1350bb"
        },
        "date": 1720550690929,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 2966979,
            "range": "± 559760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 867544,
            "range": "± 187811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 6989,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 449419,
            "range": "± 8803",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "87144a8233c9d1bdf3e26ca5349d424102ecb814",
          "message": "ci: remove useless pipeline script",
          "timestamp": "2024-07-10T02:39:42+08:00",
          "tree_id": "4c55933867ede0cc30600926904a290a5af42cea",
          "url": "https://github.com/yihau/solana/commit/87144a8233c9d1bdf3e26ca5349d424102ecb814"
        },
        "date": 1720550810540,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 2868337,
            "range": "± 502861",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 860290,
            "range": "± 226624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 6992,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 449952,
            "range": "± 6033",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "solana-poh": [
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
          "id": "89f8aa0617019e1e8fd1dcd4c0d6c14089bce4fe",
          "message": "ci: add deps",
          "timestamp": "2024-07-10T02:35:42+08:00",
          "tree_id": "1e152fe8383dc59eefc3071b0c3bb017b3df8394",
          "url": "https://github.com/yihau/solana/commit/89f8aa0617019e1e8fd1dcd4c0d6c14089bce4fe"
        },
        "date": 1720550906004,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_arc_mutex_poh_batched_hash",
            "value": 1964477,
            "range": "± 6537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_arc_mutex_poh_hash",
            "value": 2149195,
            "range": "± 3274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_hash",
            "value": 1977319,
            "range": "± 12288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_lock_time_per_batch",
            "value": 4210,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_ticks",
            "value": 6090677,
            "range": "± 121337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_transaction_entries",
            "value": 6136842,
            "range": "± 161081",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "fa271753a8f4dfc01a345c566fef9ad916264ad3",
          "message": "ci: remove bench from buildkite-pipeline",
          "timestamp": "2024-07-10T02:37:18+08:00",
          "tree_id": "d485342fe66fad2e21faa9da4e98a632e7273cea",
          "url": "https://github.com/yihau/solana/commit/fa271753a8f4dfc01a345c566fef9ad916264ad3"
        },
        "date": 1720551013584,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_arc_mutex_poh_batched_hash",
            "value": 1964544,
            "range": "± 6085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_arc_mutex_poh_hash",
            "value": 2149695,
            "range": "± 4849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_hash",
            "value": 1978416,
            "range": "± 7954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_lock_time_per_batch",
            "value": 4219,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_ticks",
            "value": 6089129,
            "range": "± 462657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_transaction_entries",
            "value": 6332822,
            "range": "± 2103154",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "413494e07f39cce8ae49b6fc1241742d2f1350bb",
          "message": "ci: remove bench from buildkite private pipeline",
          "timestamp": "2024-07-10T02:37:52+08:00",
          "tree_id": "1f8c019f7a5937eeb50014137a1df3e996a3627a",
          "url": "https://github.com/yihau/solana/commit/413494e07f39cce8ae49b6fc1241742d2f1350bb"
        },
        "date": 1720551082607,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_arc_mutex_poh_batched_hash",
            "value": 1965012,
            "range": "± 8215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_arc_mutex_poh_hash",
            "value": 2149311,
            "range": "± 4276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_hash",
            "value": 1974848,
            "range": "± 12047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_lock_time_per_batch",
            "value": 4210,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_ticks",
            "value": 6104308,
            "range": "± 574285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_transaction_entries",
            "value": 6150157,
            "range": "± 206516",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "87144a8233c9d1bdf3e26ca5349d424102ecb814",
          "message": "ci: remove useless pipeline script",
          "timestamp": "2024-07-10T02:39:42+08:00",
          "tree_id": "4c55933867ede0cc30600926904a290a5af42cea",
          "url": "https://github.com/yihau/solana/commit/87144a8233c9d1bdf3e26ca5349d424102ecb814"
        },
        "date": 1720551158871,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_arc_mutex_poh_batched_hash",
            "value": 1964243,
            "range": "± 8036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_arc_mutex_poh_hash",
            "value": 2148954,
            "range": "± 3904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_hash",
            "value": 1974168,
            "range": "± 10126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_lock_time_per_batch",
            "value": 4210,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_ticks",
            "value": 6112364,
            "range": "± 2508389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_transaction_entries",
            "value": 6132519,
            "range": "± 209161",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "solana-gossip": [
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
          "id": "89f8aa0617019e1e8fd1dcd4c0d6c14089bce4fe",
          "message": "ci: add deps",
          "timestamp": "2024-07-10T02:35:42+08:00",
          "tree_id": "1e152fe8383dc59eefc3071b0c3bb017b3df8394",
          "url": "https://github.com/yihau/solana/commit/89f8aa0617019e1e8fd1dcd4c0d6c14089bce4fe"
        },
        "date": 1720551089723,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_find_old_labels",
            "value": 2579426,
            "range": "± 352535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_build_crds_filters",
            "value": 648858,
            "range": "± 32991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_hash_as_u64",
            "value": 371,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_0",
            "value": 155948,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_1",
            "value": 77986,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_3",
            "value": 19510,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_5",
            "value": 4887,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_7",
            "value": 1229,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_8",
            "value": 251,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_9",
            "value": 1507,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_new",
            "value": 46718,
            "range": "± 31834",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_shuffle",
            "value": 218788,
            "range": "± 2086",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "413494e07f39cce8ae49b6fc1241742d2f1350bb",
          "message": "ci: remove bench from buildkite private pipeline",
          "timestamp": "2024-07-10T02:37:52+08:00",
          "tree_id": "1f8c019f7a5937eeb50014137a1df3e996a3627a",
          "url": "https://github.com/yihau/solana/commit/413494e07f39cce8ae49b6fc1241742d2f1350bb"
        },
        "date": 1720551232949,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_find_old_labels",
            "value": 3354634,
            "range": "± 1774657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_build_crds_filters",
            "value": 648815,
            "range": "± 35183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_hash_as_u64",
            "value": 388,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_0",
            "value": 156232,
            "range": "± 1687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_1",
            "value": 78039,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_3",
            "value": 19532,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_5",
            "value": 4888,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_7",
            "value": 1230,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_8",
            "value": 251,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_9",
            "value": 1504,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_new",
            "value": 47024,
            "range": "± 1262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_shuffle",
            "value": 218802,
            "range": "± 1470",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "fa271753a8f4dfc01a345c566fef9ad916264ad3",
          "message": "ci: remove bench from buildkite-pipeline",
          "timestamp": "2024-07-10T02:37:18+08:00",
          "tree_id": "d485342fe66fad2e21faa9da4e98a632e7273cea",
          "url": "https://github.com/yihau/solana/commit/fa271753a8f4dfc01a345c566fef9ad916264ad3"
        },
        "date": 1720551243848,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_find_old_labels",
            "value": 3733359,
            "range": "± 2141266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_build_crds_filters",
            "value": 656132,
            "range": "± 46087",
            "unit": "ns/iter"
          },
          {
            "name": "bench_hash_as_u64",
            "value": 377,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_0",
            "value": 155985,
            "range": "± 2030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_1",
            "value": 78007,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_3",
            "value": 19516,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_5",
            "value": 4887,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_7",
            "value": 1229,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_8",
            "value": 251,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_9",
            "value": 1503,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_new",
            "value": 46987,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_shuffle",
            "value": 218696,
            "range": "± 4027",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}