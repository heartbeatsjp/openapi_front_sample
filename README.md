# OpenAPI front sample

OpenAPIの定義を利用して作成するフロントエンドのサンプルプログラムです。

Next.jsを用いて実装しています。

対応するサーバーのアプリケーションは以下のリポジトリです。
https://github.com/heartbeatsjp/openapi_server_sample


# 使い方

## コンテナの起動

devcontainerを利用しています。VS Codeよりdevcontainerを起動してください。

## アプリケーションの起動

フロントエンド起動前に、[サーバーのサンプル](https://github.com/heartbeatsjp/openapi_server_sample)を起動してください。
サーバーの起動後、以下のコマンドを実行してください。

```bash
npm run dev
```

### 動作を確認する場合
アプリケーション起動後 http://127.0.0.1:8080 にアクセスすると、サーバーから取得したJSONのデータがブラウザに表示されます。

## OpenAPI定義の生成
本サンプルプログラムでは[サーバーのサンプル](https://github.com/heartbeatsjp/openapi_server_sample)から生成した定義ファイルを`./openapi.json`に配置しているため、生成不要です。

サーバーのOpenAPI定義に変更が発生した場合は、[サーバーのサンプル](https://github.com/heartbeatsjp/openapi_server_sample)の手順に従い定義を再生成し`./openapi.json`の内容を更新してください。

## OpenAPIクライアントの生成

devcontainer起動後、以下のコマンドを実行してください。

```bash
npm run gen-openapi-cli
```
OpenAPIクライアントのライブラリ`./src/openapi`が生成されます。
