window.BENCHMARK_DATA = {
  "lastUpdate": 1720549066328,
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
    ]
  }
}