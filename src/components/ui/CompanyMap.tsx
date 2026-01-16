import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface CompanyMapProps {
  language: 'en' | 'zh';
  address?: string;
  className?: string;
}

// 上海公司地址坐标
const COMPANY_LOCATION = {
  lat: 31.1706,
  lng: 121.3956,
  address: '上海市徐汇区虹漕路25-1号2楼'
};

const CompanyMap: React.FC<CompanyMapProps> = ({
  language,
  address = COMPANY_LOCATION.address,
  className = ''
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // 初始化地图
    const map = L.map(mapRef.current, {
      center: [COMPANY_LOCATION.lat, COMPANY_LOCATION.lng],
      zoom: 16,
      zoomControl: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      touchZoom: true,
    });

    // 使用高德地图瓦片服务（国内访问更快，符合网站设计风格）
    L.tileLayer('https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      attribution: '&copy; <a href="https://www.amap.com/">高德地图</a>',
      subdomains: ['webrd01', 'webrd02', 'webrd03', 'webrd04'],
      maxZoom: 19,
      minZoom: 3,
    }).addTo(map);

    // 创建自定义图标（使用网站的主色调）
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #1A6DFF 0%, #19E0E6 100%);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(26, 109, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 16px;
            height: 16px;
            background: white;
            border-radius: 50%;
            transform: rotate(45deg);
          "></div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    // 添加标记
    const marker = L.marker([COMPANY_LOCATION.lat, COMPANY_LOCATION.lng], {
      icon: customIcon,
    }).addTo(map);

    // 创建弹窗内容（符合网站设计风格）
    const popupContent = `
      <div style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        padding: 8px;
        min-width: 200px;
      ">
        <div style="
          font-size: 16px;
          font-weight: 600;
          color: #1A6DFF;
          margin-bottom: 8px;
        ">
          ${language === 'en' ? 'Lynse AI' : 'Lynse AI'}
        </div>
        <div style="
          font-size: 13px;
          color: #525252;
          line-height: 1.6;
          margin-bottom: 12px;
        ">
          ${address}
        </div>
        <a
          href="https://uri.amap.com/marker?position=${COMPANY_LOCATION.lng},${COMPANY_LOCATION.lat}&name=Lynse AI"
          target="_blank"
          rel="noopener noreferrer"
          style="
            display: inline-block;
            padding: 8px 16px;
            background: linear-gradient(135deg, #1A6DFF 0%, #19E0E6 100%);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 500;
            transition: transform 0.2s, box-shadow 0.2s;
          "
          onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 12px rgba(26, 109, 255, 0.3)';"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';"
        >
          ${language === 'en' ? 'Open in Amap' : '在高德地图中打开'}
        </a>
      </div>
    `;

    marker.bindPopup(popupContent, {
      maxWidth: 300,
      className: 'custom-popup',
    });

    // 添加圆圈覆盖层（突出显示公司周边区域）
    L.circle([COMPANY_LOCATION.lat, COMPANY_LOCATION.lng], {
      color: '#1A6DFF',
      fillColor: '#19E0E6',
      fillOpacity: 0.1,
      radius: 100,
      weight: 2,
    }).addTo(map);

    mapInstanceRef.current = map;
    setIsMapLoaded(true);

    // 清理函数
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [language, address]);

  return (
    <div className={`relative ${className}`}>
      {/* 地图容器 */}
      <div
        ref={mapRef}
        className="w-full h-full rounded-lg overflow-hidden"
        style={{ minHeight: '400px' }}
      />

      {/* 加载状态 */}
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500">
              {language === 'en' ? 'Loading map...' : '加载地图中...'}
            </p>
          </div>
        </div>
      )}

      {/* 地图控制提示 */}
      {isMapLoaded && (
        <div className="absolute bottom-4 left-4 z-[400] bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              {language === 'en'
                ? 'Scroll to zoom • Drag to move'
                : '滚轮缩放 • 拖动移动'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyMap;
