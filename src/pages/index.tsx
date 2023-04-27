// Copyright 2023 HEARTBEATS Corporation. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import useSWR from "swr";
import {
  Configuration,
  DefaultApiFactory,
  Item,
} from "@/openapi/typescript-axios";

// configrationを変更してDefaultApiFactoryに与えるとbasePathを切り替え可能
// ローカル開発用・本番環境用などの向き先を変更できる
const config = new Configuration({
  basePath: "http://127.0.0.1:8081",
});

export default function Home() {
  const fetcher = async (): Promise<Item> => {
    const res = await DefaultApiFactory(config).readItemItemGet();
    if (res.status !== 200) {
      throw new Error("アイテムの取得に失敗しました");
    }
    const data = await res.data;
    return data;
  };
  const { data, error } = useSWR<Item, string>("/item", fetcher);

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      <main>
        <div>{JSON.stringify(data)}</div>
      </main>
    </>
  );
}
