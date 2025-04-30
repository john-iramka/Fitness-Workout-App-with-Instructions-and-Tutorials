import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'qrcode';

interface QRCodeComponentProps {
  data: string;
  size?: number;
}

export default function QRCodeComponent({ data, size = 200 }: QRCodeComponentProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    generateQRCode();
  }, [data]);

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(data, {
        width: size,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });
      setQrCodeUrl(url);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  return (
    <View style={styles.container}>
      {qrCodeUrl && (
        <img
          src={qrCodeUrl}
          style={{
            width: size,
            height: size,
          }}
          alt="QR Code"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});