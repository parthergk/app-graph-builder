import type { AppGraphs } from "../types/graph";

export const appGraphs: AppGraphs = {
  payments: {
    nodes: [
      {
        id: "service-a",
        type: "serviceNode",
        position: { x: 100, y: 200 },
        data: {
          label: "Service A",
          status: "healthy",
          capacity: 60,
          description: "Handles incoming payment requests.",
          runtime: {
            cpu: 42,
            memory: 58,
            uptime: "2d 14h",
            lastUpdated: "2 mins ago",
          },
        },
      },
      {
        id: "service-b",
        type: "serviceNode",
        position: { x: 450, y: 200 },
        data: {
          label: "Service B",
          status: "degraded",
          capacity: 75,
          description: "Processes payment transactions.",
          runtime: {
            cpu: 81,
            memory: 73,
            uptime: "8h 30m",
            lastUpdated: "1 min ago",
          },
        },
      },
      {
        id: "database",
        type: "serviceNode",
        position: { x: 800, y: 200 },
        data: {
          label: "Database",
          status: "down",
          capacity: 40,
          description: "Stores payment records.",
          runtime: {
            cpu: 0,
            memory: 0,
            uptime: "Offline",
            lastUpdated: "15 mins ago",
          },
        },
      },
    ],
    connections: [
      {
        id: "e1",
        source: "service-a",
        target: "service-b",
        animated: true,
      },
      {
        id: "e2",
        source: "service-b",
        target: "database",
        animated: true,
      },
    ],
  },

  analytics: {
    nodes: [
      {
        id: "collector",
        type: "serviceNode",
        position: { x: 100, y: 200 },
        data: {
          label: "Data Collector",
          status: "healthy",
          capacity: 45,
          description: "Collects event data from services.",
          runtime: {
            cpu: 35,
            memory: 40,
            uptime: "5d 2h",
            lastUpdated: "Just now",
          },
        },
      },
      {
        id: "aggregator",
        type: "serviceNode",
        position: { x: 450, y: 200 },
        data: {
          label: "Aggregator",
          status: "healthy",
          capacity: 80,
          description: "Aggregates and transforms analytics events.",
          runtime: {
            cpu: 72,
            memory: 68,
            uptime: "3d 8h",
            lastUpdated: "30 sec ago",
          },
        },
      },
      {
        id: "warehouse",
        type: "serviceNode",
        position: { x: 800, y: 200 },
        data: {
          label: "Data Warehouse",
          status: "healthy",
          capacity: 50,
          description: "Stores processed analytics data.",
          runtime: {
            cpu: 28,
            memory: 52,
            uptime: "10d 6h",
            lastUpdated: "5 mins ago",
          },
        },
      },
    ],
    connections: [
      {
        id: "e1",
        source: "collector",
        target: "aggregator",
        animated: true,
      },
      {
        id: "e2",
        source: "aggregator",
        target: "warehouse",
        animated: true,
      },
    ],
  },

  ecommerce: {
    nodes: [
      {
        id: "frontend",
        type: "serviceNode",
        position: { x: 100, y: 200 },
        data: {
          label: "Web Frontend",
          status: "healthy",
          capacity: 30,
          description: "Customer-facing ecommerce application.",
          runtime: {
            cpu: 22,
            memory: 37,
            uptime: "7d 4h",
            lastUpdated: "1 min ago",
          },
        },
      },
      {
        id: "cart-service",
        type: "serviceNode",
        position: { x: 400, y: 200 },
        data: {
          label: "Cart Service",
          status: "degraded",
          capacity: 90,
          description: "Handles shopping cart operations.",
          runtime: {
            cpu: 91,
            memory: 84,
            uptime: "12h",
            lastUpdated: "20 sec ago",
          },
        },
      },
      {
        id: "cache",
        type: "serviceNode",
        position: { x: 700, y: 100 },
        data: {
          label: "Redis Cache",
          status: "healthy",
          capacity: 15,
          description: "Caches frequently requested data.",
          runtime: {
            cpu: 10,
            memory: 18,
            uptime: "15d 9h",
            lastUpdated: "Just now",
          },
        },
      },
      {
        id: "orders-db",
        type: "serviceNode",
        position: { x: 700, y: 300 },
        data: {
          label: "SQL Orders DB",
          status: "healthy",
          capacity: 65,
          description: "Stores order information.",
          runtime: {
            cpu: 46,
            memory: 60,
            uptime: "20d 11h",
            lastUpdated: "3 mins ago",
          },
        },
      },
    ],
    connections: [
      {
        id: "e1",
        source: "frontend",
        target: "cart-service",
        animated: true,
      },
      {
        id: "e2",
        source: "cart-service",
        target: "cache",
        animated: true,
      },
      {
        id: "e3",
        source: "cart-service",
        target: "orders-db",
        animated: true,
      },
    ],
  }
}