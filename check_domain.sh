#!/bin/bash

# ドメイン設定確認スクリプト

DOMAIN="pickuplab.jp"

echo "=========================================="
echo "ドメイン設定確認: $DOMAIN"
echo "=========================================="
echo ""

# DNSレコードの確認
echo "【DNSレコードの確認】"
echo "Aレコード:"
dig +short $DOMAIN A
echo ""
echo "CNAMEレコード (www):"
dig +short www.$DOMAIN CNAME
echo ""

# ネームサーバーの確認
echo "【ネームサーバーの確認】"
dig +short NS $DOMAIN
echo ""

# SSL証明書の確認
echo "【SSL証明書の確認】"
echo | openssl s_client -servername $DOMAIN -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -dates 2>/dev/null
if [ $? -eq 0 ]; then
    echo "✅ SSL証明書が有効です"
else
    echo "❌ SSL証明書が見つかりません"
fi
echo ""

# HTTPステータスの確認
echo "【HTTPステータスの確認】"
HTTP_STATUS=$(curl -o /dev/null -s -w "%{http_code}" https://$DOMAIN)
if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ サイトが正常に応答しています (HTTP $HTTP_STATUS)"
else
    echo "⚠️  サイトの応答: HTTP $HTTP_STATUS"
fi
echo ""

echo "=========================================="
echo "確認完了"
echo "=========================================="
