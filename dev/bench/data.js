window.BENCHMARK_DATA = {
  "lastUpdate": 1720944613126,
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
          "id": "8c9070b2ff29611dca2ac26a680c34c22b3a09c6",
          "message": "ci: remove solana-core",
          "timestamp": "2024-07-10T03:03:01+08:00",
          "tree_id": "f93be4c7dabc4b0f0342fe0bb7db8d5ccc1432ae",
          "url": "https://github.com/yihau/solana/commit/8c9070b2ff29611dca2ac26a680c34c22b3a09c6"
        },
        "date": 1720551982991,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_set_data_from_slice_changed_100k",
            "value": 2326,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_10mb",
            "value": 453535,
            "range": "± 16131",
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
            "value": 42633,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_100k",
            "value": 9714,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_10mb",
            "value": 455345,
            "range": "± 35823",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1k",
            "value": 1059,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1mb",
            "value": 265176,
            "range": "± 4461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_100k",
            "value": 10081,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_10mb",
            "value": 2703297,
            "range": "± 43799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_1mb",
            "value": 262931,
            "range": "± 5273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_100k",
            "value": 34119,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_10mb",
            "value": 2107847,
            "range": "± 33630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1k",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1mb",
            "value": 195056,
            "range": "± 2166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_032",
            "value": 60330,
            "range": "± 1059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_128",
            "value": 60536,
            "range": "± 1000",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_32k",
            "value": 121974,
            "range": "± 1149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_max",
            "value": 183116,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_032",
            "value": 189350,
            "range": "± 1896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_256",
            "value": 190107,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_32k",
            "value": 283043,
            "range": "± 1725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_max",
            "value": 376587,
            "range": "± 3543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_deserialize",
            "value": 2769,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_serialize",
            "value": 1474,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_construct_instructions_data",
            "value": 306,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize",
            "value": 186,
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
            "value": 235,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_vec",
            "value": 226,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 112170,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_slot_history_add_new",
            "value": 547239,
            "range": "± 7987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 68372,
            "range": "± 474",
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
          "id": "8d2061a63c5f99023e12a93fc2360f43813d263e",
          "message": "another try",
          "timestamp": "2024-07-13T01:59:36+08:00",
          "tree_id": "c56b5273cc8a345f5700abf9dce0f4f2eb8237e5",
          "url": "https://github.com/yihau/solana/commit/8d2061a63c5f99023e12a93fc2360f43813d263e"
        },
        "date": 1720807888584,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_set_data_from_slice_changed_100k",
            "value": 1964,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_10mb",
            "value": 473043,
            "range": "± 2852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_1k",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_1mb",
            "value": 31675,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_100k",
            "value": 3078,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_10mb",
            "value": 472943,
            "range": "± 3921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1k",
            "value": 840,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1mb",
            "value": 32593,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_100k",
            "value": 3008,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_10mb",
            "value": 468489,
            "range": "± 2537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_1mb",
            "value": 32520,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_100k",
            "value": 1836,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_10mb",
            "value": 321096,
            "range": "± 3525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1k",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1mb",
            "value": 31057,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_032",
            "value": 54104,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_128",
            "value": 54448,
            "range": "± 1152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_32k",
            "value": 108654,
            "range": "± 2275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_max",
            "value": 162263,
            "range": "± 3885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_032",
            "value": 166322,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_256",
            "value": 166640,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_32k",
            "value": 249247,
            "range": "± 2165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_max",
            "value": 331322,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_deserialize",
            "value": 2413,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_serialize",
            "value": 1033,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_construct_instructions_data",
            "value": 270,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize",
            "value": 165,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize_single",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_short_vec",
            "value": 207,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_vec",
            "value": 203,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 103442,
            "range": "± 1912",
            "unit": "ns/iter"
          },
          {
            "name": "bench_slot_history_add_new",
            "value": 488828,
            "range": "± 7104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 65651,
            "range": "± 323",
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
          "id": "279ec0a1aa8b211b4080a61b7678235e9f5ed7a8",
          "message": "fix 3",
          "timestamp": "2024-07-13T03:06:14+08:00",
          "tree_id": "7fbafc9df03e222490c674e3bf2965ff059f31bf",
          "url": "https://github.com/yihau/solana/commit/279ec0a1aa8b211b4080a61b7678235e9f5ed7a8"
        },
        "date": 1720813089597,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_set_data_from_slice_changed_100k",
            "value": 1969,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_10mb",
            "value": 468650,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_1k",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_1mb",
            "value": 25046,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_100k",
            "value": 2916,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_10mb",
            "value": 470364,
            "range": "± 2004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1k",
            "value": 861,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1mb",
            "value": 26126,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_100k",
            "value": 2967,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_10mb",
            "value": 466397,
            "range": "± 1706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_1mb",
            "value": 26140,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_100k",
            "value": 1793,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_10mb",
            "value": 277380,
            "range": "± 6708",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1k",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1mb",
            "value": 24866,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_032",
            "value": 54576,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_128",
            "value": 54692,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_32k",
            "value": 108833,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_max",
            "value": 162646,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_032",
            "value": 166589,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_256",
            "value": 167182,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_32k",
            "value": 249884,
            "range": "± 2073",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_max",
            "value": 332151,
            "range": "± 4147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_deserialize",
            "value": 2414,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_serialize",
            "value": 1025,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_construct_instructions_data",
            "value": 279,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize",
            "value": 164,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize_single",
            "value": 43,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_short_vec",
            "value": 207,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_vec",
            "value": 204,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 99032,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_slot_history_add_new",
            "value": 486520,
            "range": "± 6754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 64663,
            "range": "± 283",
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
          "id": "1be133441be46b25efbf12ecdd07006baa99bb1b",
          "message": "fix programs/sbf tests",
          "timestamp": "2024-07-14T14:44:24+08:00",
          "tree_id": "724bd1b40c889ae5c55ca01d0e002183fc04d60c",
          "url": "https://github.com/yihau/solana/commit/1be133441be46b25efbf12ecdd07006baa99bb1b"
        },
        "date": 1720940669703,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_set_data_from_slice_changed_100k",
            "value": 1959,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_10mb",
            "value": 475677,
            "range": "± 1974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_1k",
            "value": 13,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_changed_1mb",
            "value": 31521,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_100k",
            "value": 3159,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_10mb",
            "value": 477865,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1k",
            "value": 848,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_grow_1mb",
            "value": 32706,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_100k",
            "value": 2936,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_10mb",
            "value": 472270,
            "range": "± 1801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_shrink_1mb",
            "value": 32643,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_100k",
            "value": 1788,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_10mb",
            "value": 329731,
            "range": "± 2654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1k",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_set_data_from_slice_unchanged_1mb",
            "value": 31130,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_032",
            "value": 56921,
            "range": "± 2494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_128",
            "value": 56274,
            "range": "± 3183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_32k",
            "value": 110716,
            "range": "± 2672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_ed25519_len_max",
            "value": 164360,
            "range": "± 2865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_032",
            "value": 166005,
            "range": "± 691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_256",
            "value": 166635,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_32k",
            "value": 248996,
            "range": "± 1296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_secp256k1_len_max",
            "value": 330063,
            "range": "± 1360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_deserialize",
            "value": 2386,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_bincode_instruction_serialize",
            "value": 1029,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_construct_instructions_data",
            "value": 277,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize",
            "value": 170,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_manual_instruction_deserialize_single",
            "value": 42,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_short_vec",
            "value": 207,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_vec",
            "value": 192,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 103914,
            "range": "± 1463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_slot_history_add_new",
            "value": 486893,
            "range": "± 4839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_to_from_account",
            "value": 64773,
            "range": "± 182",
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
          "id": "8c9070b2ff29611dca2ac26a680c34c22b3a09c6",
          "message": "ci: remove solana-core",
          "timestamp": "2024-07-10T03:03:01+08:00",
          "tree_id": "f93be4c7dabc4b0f0342fe0bb7db8d5ccc1432ae",
          "url": "https://github.com/yihau/solana/commit/8c9070b2ff29611dca2ac26a680c34c22b3a09c6"
        },
        "date": 1720552199838,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 2773335,
            "range": "± 763266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 758136,
            "range": "± 106522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 6985,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 444716,
            "range": "± 8340",
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
          "id": "8d2061a63c5f99023e12a93fc2360f43813d263e",
          "message": "another try",
          "timestamp": "2024-07-13T01:59:36+08:00",
          "tree_id": "c56b5273cc8a345f5700abf9dce0f4f2eb8237e5",
          "url": "https://github.com/yihau/solana/commit/8d2061a63c5f99023e12a93fc2360f43813d263e"
        },
        "date": 1720807796466,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 3239340,
            "range": "± 641266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 855035,
            "range": "± 166315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 6167,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 391876,
            "range": "± 6502",
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
          "id": "279ec0a1aa8b211b4080a61b7678235e9f5ed7a8",
          "message": "fix 3",
          "timestamp": "2024-07-13T03:06:14+08:00",
          "tree_id": "7fbafc9df03e222490c674e3bf2965ff059f31bf",
          "url": "https://github.com/yihau/solana/commit/279ec0a1aa8b211b4080a61b7678235e9f5ed7a8"
        },
        "date": 1720812986138,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 3102937,
            "range": "± 1268659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 694418,
            "range": "± 86082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 6159,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 393354,
            "range": "± 1955",
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
          "id": "1be133441be46b25efbf12ecdd07006baa99bb1b",
          "message": "fix programs/sbf tests",
          "timestamp": "2024-07-14T14:44:24+08:00",
          "tree_id": "724bd1b40c889ae5c55ca01d0e002183fc04d60c",
          "url": "https://github.com/yihau/solana/commit/1be133441be46b25efbf12ecdd07006baa99bb1b"
        },
        "date": 1720940856860,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_create",
            "value": 3143299,
            "range": "± 1270855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_squash",
            "value": 711203,
            "range": "± 79465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_root_slot_deltas",
            "value": 6150,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_status_cache_serialize",
            "value": 394688,
            "range": "± 2269",
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
          "id": "8c9070b2ff29611dca2ac26a680c34c22b3a09c6",
          "message": "ci: remove solana-core",
          "timestamp": "2024-07-10T03:03:01+08:00",
          "tree_id": "f93be4c7dabc4b0f0342fe0bb7db8d5ccc1432ae",
          "url": "https://github.com/yihau/solana/commit/8c9070b2ff29611dca2ac26a680c34c22b3a09c6"
        },
        "date": 1720552546597,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_arc_mutex_poh_batched_hash",
            "value": 1963229,
            "range": "± 3763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_arc_mutex_poh_hash",
            "value": 2149178,
            "range": "± 79126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_hash",
            "value": 1973735,
            "range": "± 14029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_lock_time_per_batch",
            "value": 4206,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_ticks",
            "value": 6087955,
            "range": "± 303787",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_transaction_entries",
            "value": 6155204,
            "range": "± 2350076",
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
          "id": "8d2061a63c5f99023e12a93fc2360f43813d263e",
          "message": "another try",
          "timestamp": "2024-07-13T01:59:36+08:00",
          "tree_id": "c56b5273cc8a345f5700abf9dce0f4f2eb8237e5",
          "url": "https://github.com/yihau/solana/commit/8d2061a63c5f99023e12a93fc2360f43813d263e"
        },
        "date": 1720807614431,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_arc_mutex_poh_batched_hash",
            "value": 1735697,
            "range": "± 11211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_arc_mutex_poh_hash",
            "value": 1904835,
            "range": "± 12942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_hash",
            "value": 1750935,
            "range": "± 17766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_lock_time_per_batch",
            "value": 3735,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_ticks",
            "value": 468868,
            "range": "± 61290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_transaction_entries",
            "value": 469149,
            "range": "± 44994",
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
          "id": "279ec0a1aa8b211b4080a61b7678235e9f5ed7a8",
          "message": "fix 3",
          "timestamp": "2024-07-13T03:06:14+08:00",
          "tree_id": "7fbafc9df03e222490c674e3bf2965ff059f31bf",
          "url": "https://github.com/yihau/solana/commit/279ec0a1aa8b211b4080a61b7678235e9f5ed7a8"
        },
        "date": 1720812798319,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_arc_mutex_poh_batched_hash",
            "value": 1737087,
            "range": "± 9483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_arc_mutex_poh_hash",
            "value": 2039702,
            "range": "± 8301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_hash",
            "value": 1753504,
            "range": "± 7314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_lock_time_per_batch",
            "value": 3737,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_ticks",
            "value": 468185,
            "range": "± 35410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_transaction_entries",
            "value": 477527,
            "range": "± 29099",
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
          "id": "1be133441be46b25efbf12ecdd07006baa99bb1b",
          "message": "fix programs/sbf tests",
          "timestamp": "2024-07-14T14:44:24+08:00",
          "tree_id": "724bd1b40c889ae5c55ca01d0e002183fc04d60c",
          "url": "https://github.com/yihau/solana/commit/1be133441be46b25efbf12ecdd07006baa99bb1b"
        },
        "date": 1720942683936,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_arc_mutex_poh_batched_hash",
            "value": 1730025,
            "range": "± 9613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_arc_mutex_poh_hash",
            "value": 1900973,
            "range": "± 10289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_hash",
            "value": 1746870,
            "range": "± 13057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_lock_time_per_batch",
            "value": 3722,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_ticks",
            "value": 462835,
            "range": "± 26645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_poh_verify_transaction_entries",
            "value": 472057,
            "range": "± 56809",
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
        "date": 1720551341364,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_find_old_labels",
            "value": 4524628,
            "range": "± 975240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_build_crds_filters",
            "value": 647850,
            "range": "± 54522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_hash_as_u64",
            "value": 379,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_0",
            "value": 155983,
            "range": "± 1931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_1",
            "value": 78109,
            "range": "± 7668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_3",
            "value": 19512,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_5",
            "value": 4885,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_7",
            "value": 1230,
            "range": "± 8",
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
            "value": 1505,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_new",
            "value": 46841,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_shuffle",
            "value": 219776,
            "range": "± 2020",
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
          "id": "8c9070b2ff29611dca2ac26a680c34c22b3a09c6",
          "message": "ci: remove solana-core",
          "timestamp": "2024-07-10T03:03:01+08:00",
          "tree_id": "f93be4c7dabc4b0f0342fe0bb7db8d5ccc1432ae",
          "url": "https://github.com/yihau/solana/commit/8c9070b2ff29611dca2ac26a680c34c22b3a09c6"
        },
        "date": 1720552739622,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_find_old_labels",
            "value": 3641005,
            "range": "± 1473034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_build_crds_filters",
            "value": 653920,
            "range": "± 33536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_hash_as_u64",
            "value": 378,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_0",
            "value": 155958,
            "range": "± 1792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_1",
            "value": 78016,
            "range": "± 18029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_3",
            "value": 19510,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_5",
            "value": 4886,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_7",
            "value": 1230,
            "range": "± 11",
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
            "value": 1502,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_new",
            "value": 46751,
            "range": "± 767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_shuffle",
            "value": 219007,
            "range": "± 2834",
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
          "id": "8d2061a63c5f99023e12a93fc2360f43813d263e",
          "message": "another try",
          "timestamp": "2024-07-13T01:59:36+08:00",
          "tree_id": "c56b5273cc8a345f5700abf9dce0f4f2eb8237e5",
          "url": "https://github.com/yihau/solana/commit/8d2061a63c5f99023e12a93fc2360f43813d263e"
        },
        "date": 1720807448142,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_find_old_labels",
            "value": 756526,
            "range": "± 35946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_build_crds_filters",
            "value": 279673,
            "range": "± 9181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_hash_as_u64",
            "value": 338,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_0",
            "value": 138388,
            "range": "± 976",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_1",
            "value": 69143,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_3",
            "value": 17314,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_5",
            "value": 4333,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_7",
            "value": 1096,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_8",
            "value": 223,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_9",
            "value": 1334,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_new",
            "value": 41834,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_shuffle",
            "value": 195042,
            "range": "± 5116",
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
          "id": "279ec0a1aa8b211b4080a61b7678235e9f5ed7a8",
          "message": "fix 3",
          "timestamp": "2024-07-13T03:06:14+08:00",
          "tree_id": "7fbafc9df03e222490c674e3bf2965ff059f31bf",
          "url": "https://github.com/yihau/solana/commit/279ec0a1aa8b211b4080a61b7678235e9f5ed7a8"
        },
        "date": 1720811437174,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_find_old_labels",
            "value": 772491,
            "range": "± 29019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_build_crds_filters",
            "value": 289904,
            "range": "± 33418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_hash_as_u64",
            "value": 336,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_0",
            "value": 138618,
            "range": "± 1052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_1",
            "value": 69134,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_3",
            "value": 17310,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_5",
            "value": 4334,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_7",
            "value": 1096,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_8",
            "value": 222,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_9",
            "value": 1333,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_new",
            "value": 40993,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_shuffle",
            "value": 195104,
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
          "id": "1be133441be46b25efbf12ecdd07006baa99bb1b",
          "message": "fix programs/sbf tests",
          "timestamp": "2024-07-14T14:44:24+08:00",
          "tree_id": "724bd1b40c889ae5c55ca01d0e002183fc04d60c",
          "url": "https://github.com/yihau/solana/commit/1be133441be46b25efbf12ecdd07006baa99bb1b"
        },
        "date": 1720941919327,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_find_old_labels",
            "value": 780095,
            "range": "± 28779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_build_crds_filters",
            "value": 289036,
            "range": "± 5088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_hash_as_u64",
            "value": 338,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_0",
            "value": 137788,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_1",
            "value": 68913,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_3",
            "value": 17228,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_5",
            "value": 4318,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_7",
            "value": 1087,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_8",
            "value": 222,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_crds_shards_find_9",
            "value": 1328,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_new",
            "value": 40900,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_weighted_shuffle_shuffle",
            "value": 193273,
            "range": "± 1692",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "solana-core": [
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
        "date": 1720551384976,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_process_entries",
            "value": 28166667,
            "range": "± 11649572",
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
        "date": 1720551459666,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_process_entries",
            "value": 26726213,
            "range": "± 9154887",
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
        "date": 1720551566518,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_process_entries",
            "value": 27455573,
            "range": "± 9636007",
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
        "date": 1720551603833,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_process_entries",
            "value": 27305105,
            "range": "± 10830383",
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
          "id": "279ec0a1aa8b211b4080a61b7678235e9f5ed7a8",
          "message": "fix 3",
          "timestamp": "2024-07-13T03:06:14+08:00",
          "tree_id": "7fbafc9df03e222490c674e3bf2965ff059f31bf",
          "url": "https://github.com/yihau/solana/commit/279ec0a1aa8b211b4080a61b7678235e9f5ed7a8"
        },
        "date": 1720812633450,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_process_entries",
            "value": 27733280,
            "range": "± 2580476",
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
          "id": "1be133441be46b25efbf12ecdd07006baa99bb1b",
          "message": "fix programs/sbf tests",
          "timestamp": "2024-07-14T14:44:24+08:00",
          "tree_id": "724bd1b40c889ae5c55ca01d0e002183fc04d60c",
          "url": "https://github.com/yihau/solana/commit/1be133441be46b25efbf12ecdd07006baa99bb1b"
        },
        "date": 1720942519007,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_banking_stage_multi_accounts",
            "value": 9994094,
            "range": "± 280261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_stage_multi_accounts_with_voting",
            "value": 9162487,
            "range": "± 376278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_stage_multi_programs",
            "value": 18638398,
            "range": "± 318608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_stage_multi_programs_with_voting",
            "value": 17557159,
            "range": "± 2238466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_consume_buffered",
            "value": 6161,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_process_entries",
            "value": 27161836,
            "range": "± 1913131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_tracer_background_thread_throughput",
            "value": 35626610,
            "range": "± 60357921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_tracer_main_thread_overhead_noop_baseline",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_tracer_main_thread_overhead_under_peak_write",
            "value": 354,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_tracer_main_thread_overhead_under_sustained_write",
            "value": 362,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_save_tower",
            "value": 1669307,
            "range": "± 15914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_process_and_record_transactions_full_batch",
            "value": 652979,
            "range": "± 25494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_process_and_record_transactions_half_batch",
            "value": 615133,
            "range": "± 28274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_process_and_record_transactions_unbatched",
            "value": 1869544,
            "range": "± 57577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_forwarder_handle_forwading_contentious_transaction",
            "value": 7410953,
            "range": "± 47486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_forwarder_handle_forwading_parallel_transactions",
            "value": 7748942,
            "range": "± 70114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_gen_keys",
            "value": 761425,
            "range": "± 79467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_deserialize_hdr",
            "value": 270,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_deshredder",
            "value": 11665923,
            "range": "± 45441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_shredder_coding",
            "value": 49909,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_shredder_decoding",
            "value": 53949,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_shredder_large_entries",
            "value": 7637284,
            "range": "± 113465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_shredder_ticks",
            "value": 7065475,
            "range": "± 63218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_packet_discard_many_senders",
            "value": 1390288,
            "range": "± 6547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_packet_discard_mixed_senders",
            "value": 924719,
            "range": "± 9669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_packet_discard_single_sender",
            "value": 823824,
            "range": "± 10247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sigverify_stage_with_same_tx",
            "value": 5403521,
            "range": "± 93084",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sigverify_stage_without_same_tx",
            "value": 87971360,
            "range": "± 477663",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_0",
            "value": 26627727,
            "range": "± 4390087",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_10",
            "value": 22425691,
            "range": "± 3075717",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_20",
            "value": 17363970,
            "range": "± 307837",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_30",
            "value": 17032616,
            "range": "± 39720",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_40",
            "value": 16764638,
            "range": "± 285263",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_50",
            "value": 16415744,
            "range": "± 173798",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_60",
            "value": 9165804,
            "range": "± 5742960",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_70",
            "value": 11165810,
            "range": "± 4999201",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_80",
            "value": 9313832,
            "range": "± 2178706",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_90",
            "value": 8147024,
            "range": "± 77130",
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
          "id": "d873886c7e12b1512c6fc3cf49ae630878eb62b8",
          "message": "remove",
          "timestamp": "2024-07-14T15:50:43+08:00",
          "tree_id": "f1d148325d5339760727398ef72eefe2c7ce09a2",
          "url": "https://github.com/yihau/solana/commit/d873886c7e12b1512c6fc3cf49ae630878eb62b8"
        },
        "date": 1720944511323,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_banking_stage_multi_accounts",
            "value": 10575845,
            "range": "± 1483115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_stage_multi_accounts_with_voting",
            "value": 10065686,
            "range": "± 696523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_stage_multi_programs",
            "value": 19109300,
            "range": "± 346468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_stage_multi_programs_with_voting",
            "value": 19139437,
            "range": "± 1716851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_consume_buffered",
            "value": 6179,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_process_entries",
            "value": 28294213,
            "range": "± 1893525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_tracer_background_thread_throughput",
            "value": 25840966,
            "range": "± 40280482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_tracer_main_thread_overhead_noop_baseline",
            "value": 42,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_tracer_main_thread_overhead_under_peak_write",
            "value": 368,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_banking_tracer_main_thread_overhead_under_sustained_write",
            "value": 435,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_save_tower",
            "value": 1668661,
            "range": "± 13819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_process_and_record_transactions_full_batch",
            "value": 718131,
            "range": "± 20059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_process_and_record_transactions_half_batch",
            "value": 708637,
            "range": "± 40180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_process_and_record_transactions_unbatched",
            "value": 2041681,
            "range": "± 47862",
            "unit": "ns/iter"
          },
          {
            "name": "bench_forwarder_handle_forwading_contentious_transaction",
            "value": 8282669,
            "range": "± 37008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_forwarder_handle_forwading_parallel_transactions",
            "value": 8504095,
            "range": "± 36577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_gen_keys",
            "value": 808787,
            "range": "± 93706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_deserialize_hdr",
            "value": 250,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_deshredder",
            "value": 11765788,
            "range": "± 47923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_shredder_coding",
            "value": 51183,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_shredder_decoding",
            "value": 55794,
            "range": "± 711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_shredder_large_entries",
            "value": 7661529,
            "range": "± 47565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_shredder_ticks",
            "value": 7154278,
            "range": "± 41411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_packet_discard_many_senders",
            "value": 1495196,
            "range": "± 15361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_packet_discard_mixed_senders",
            "value": 1108765,
            "range": "± 14061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_packet_discard_single_sender",
            "value": 996148,
            "range": "± 15054",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sigverify_stage_with_same_tx",
            "value": 5654958,
            "range": "± 89629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sigverify_stage_without_same_tx",
            "value": 93202095,
            "range": "± 510354",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_0",
            "value": 27794534,
            "range": "± 4309370",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_10",
            "value": 23313722,
            "range": "± 1650802",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_20",
            "value": 18060066,
            "range": "± 286474",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_30",
            "value": 17646858,
            "range": "± 204835",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_40",
            "value": 17386936,
            "range": "± 317354",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_50",
            "value": 17036890,
            "range": "± 137903",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_60",
            "value": 9513196,
            "range": "± 4970881",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_70",
            "value": 10366914,
            "range": "± 4178027",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_80",
            "value": 10095851,
            "range": "± 4154613",
            "unit": "ns/iter"
          },
          {
            "name": "bsv_90",
            "value": 8546002,
            "range": "± 2906357",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "solana-accounts-db": [
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
          "id": "279ec0a1aa8b211b4080a61b7678235e9f5ed7a8",
          "message": "fix 3",
          "timestamp": "2024-07-13T03:06:14+08:00",
          "tree_id": "7fbafc9df03e222490c674e3bf2965ff059f31bf",
          "url": "https://github.com/yihau/solana/commit/279ec0a1aa8b211b4080a61b7678235e9f5ed7a8"
        },
        "date": 1720812239257,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_delta_hash",
            "value": 37442119,
            "range": "± 1395861",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_hash_bank_hash",
            "value": 598888917,
            "range": "± 35694988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_concurrent_read_write",
            "value": 691679,
            "range": "± 515167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_concurrent_scan_write",
            "value": 759573,
            "range": "± 494428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_dashmap_iter",
            "value": 206370,
            "range": "± 4674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_dashmap_par_iter",
            "value": 194780,
            "range": "± 7891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_delete_dependencies",
            "value": 79484,
            "range": "± 972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_load_largest_accounts",
            "value": 6915179,
            "range": "± 66181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sort_and_remove_dups",
            "value": 72185,
            "range": "± 1122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sort_and_remove_dups_no_dups",
            "value": 72069,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_update_accounts_hash",
            "value": 41901775,
            "range": "± 4637775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_index",
            "value": 10981287,
            "range": "± 5312443",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_append",
            "value": 57,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_concurrent_append_read",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_concurrent_read_append",
            "value": 315,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_random_read",
            "value": 60,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_sequential_read",
            "value": 102,
            "range": "± 2",
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
          "id": "1be133441be46b25efbf12ecdd07006baa99bb1b",
          "message": "fix programs/sbf tests",
          "timestamp": "2024-07-14T14:44:24+08:00",
          "tree_id": "724bd1b40c889ae5c55ca01d0e002183fc04d60c",
          "url": "https://github.com/yihau/solana/commit/1be133441be46b25efbf12ecdd07006baa99bb1b"
        },
        "date": 1720941653505,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_delta_hash",
            "value": 38433174,
            "range": "± 1107755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_hash_bank_hash",
            "value": 597300504,
            "range": "± 30979303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_concurrent_read_write",
            "value": 728074,
            "range": "± 440582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_concurrent_scan_write",
            "value": 753511,
            "range": "± 740819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_dashmap_iter",
            "value": 205796,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_dashmap_par_iter",
            "value": 187550,
            "range": "± 15556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_delete_dependencies",
            "value": 74099,
            "range": "± 1971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_load_largest_accounts",
            "value": 7167436,
            "range": "± 169069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sort_and_remove_dups",
            "value": 72467,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sort_and_remove_dups_no_dups",
            "value": 71885,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_update_accounts_hash",
            "value": 33774396,
            "range": "± 7621047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_index",
            "value": 11065450,
            "range": "± 5470457",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_append",
            "value": 57,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_concurrent_append_read",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_concurrent_read_append",
            "value": 311,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_random_read",
            "value": 60,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_sequential_read",
            "value": 100,
            "range": "± 0",
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
          "id": "d873886c7e12b1512c6fc3cf49ae630878eb62b8",
          "message": "remove",
          "timestamp": "2024-07-14T15:50:43+08:00",
          "tree_id": "f1d148325d5339760727398ef72eefe2c7ce09a2",
          "url": "https://github.com/yihau/solana/commit/d873886c7e12b1512c6fc3cf49ae630878eb62b8"
        },
        "date": 1720944180683,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_accounts_delta_hash",
            "value": 39651875,
            "range": "± 1267374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_hash_bank_hash",
            "value": 595022239,
            "range": "± 31152628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_concurrent_read_write",
            "value": 791014,
            "range": "± 567212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_concurrent_scan_write",
            "value": 797620,
            "range": "± 662031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_dashmap_iter",
            "value": 202567,
            "range": "± 2257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_dashmap_par_iter",
            "value": 184021,
            "range": "± 5638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_delete_dependencies",
            "value": 71795,
            "range": "± 1394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_load_largest_accounts",
            "value": 10866564,
            "range": "± 1495392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sort_and_remove_dups",
            "value": 72436,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_sort_and_remove_dups_no_dups",
            "value": 71426,
            "range": "± 1912",
            "unit": "ns/iter"
          },
          {
            "name": "bench_update_accounts_hash",
            "value": 35898727,
            "range": "± 8137370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_accounts_index",
            "value": 10452667,
            "range": "± 5080918",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_append",
            "value": 72,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_concurrent_append_read",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_concurrent_read_append",
            "value": 321,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_random_read",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "append_vec_sequential_read",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sbf": [
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
          "id": "1be133441be46b25efbf12ecdd07006baa99bb1b",
          "message": "fix programs/sbf tests",
          "timestamp": "2024-07-14T14:44:24+08:00",
          "tree_id": "724bd1b40c889ae5c55ca01d0e002183fc04d60c",
          "url": "https://github.com/yihau/solana/commit/1be133441be46b25efbf12ecdd07006baa99bb1b"
        },
        "date": 1720943017956,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_create_vm",
            "value": 6910,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_instruction_count_tuner",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_program_alu",
            "value": 3675,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_program_create_executable",
            "value": 888,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_program_execute_noop",
            "value": 46692,
            "range": "± 300",
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
          "id": "d873886c7e12b1512c6fc3cf49ae630878eb62b8",
          "message": "remove",
          "timestamp": "2024-07-14T15:50:43+08:00",
          "tree_id": "f1d148325d5339760727398ef72eefe2c7ce09a2",
          "url": "https://github.com/yihau/solana/commit/d873886c7e12b1512c6fc3cf49ae630878eb62b8"
        },
        "date": 1720944612743,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_create_vm",
            "value": 6713,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_instruction_count_tuner",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_program_alu",
            "value": 3673,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_program_create_executable",
            "value": 874,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_program_execute_noop",
            "value": 46001,
            "range": "± 427",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}