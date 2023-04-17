# OpenAPI front sample

OpenAPIの定義を利用して作成するフロントエンドのサンプルプログラムです。

Next.jsを用いて実装しています。

対応するサーバーのアプリケーションは

# 使い方

## コンテナの起動

devcontainerを利用しています。VSCodeよりdevcontainerを起動してください。

## OpenAPI定義の生成
本サンプルプログラムでは[サーバーのサンプル](https://todo)から生成した定義ファイルを`./openapi.json`に配置しているため、生成不要です。

サーバーのOpenAPI定義に変更が発生した場合は、[サーバーのサンプル](https://todo)の手順に従い定義を再生成し`./openapi.json`の内容を更新してください。

## OpenAPIクライアントの生成

devcontainer起動後、以下のコマンドを実行してください。

```bash
npm run gen-openapi-cli
```
OpenAPIクライアントのライブラリ`./src/openapi`が生成されます。

## アプリケーションの起動

フロントエンド起動前に、[サーバーのサンプル](https://todo)のサンプルサーバーを起動してください。
OpenAPIクライアントの生成後、以下のコマンドを実行してください。

```bash
npm run dev
```
アプリケーション起動後 http://127.0.0.1:8080 にアクセスすると、サーバーから取得したJSONのデータがブラウザに表示されます。
