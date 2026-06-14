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
          capacity: "60%",
        },
      },
      {
        id: "service-b",
        type: "serviceNode",
        position: { x: 450, y: 200 },
        data: {
          label: "Service B",
          status: "degraded",
          capacity: "75%",
        },
      },
      {
        id: "database",
        type: "serviceNode",
        position: { x: 800, y: 200 },
        data: {
          label: "Database",
          status: "down",
          capacity: "40%",
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
          capacity: "45%",
        },
      },
      {
        id: "aggregator",
        type: "serviceNode",
        position: { x: 450, y: 200 },
        data: {
          label: "Aggregator",
          status: "healthy",
          capacity: "80%",
        },
      },
      {
        id: "warehouse",
        type: "serviceNode",
        position: { x: 800, y: 200 },
        data: {
          label: "Data Warehouse",
          status: "healthy",
          capacity: "50%",
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
          capacity: "30%",
        },
      },
      {
        id: "cart-service",
        type: "serviceNode",
        position: { x: 400, y: 200 },
        data: {
          label: "Cart Service",
          status: "degraded",
          capacity: "90%",
        },
      },
      {
        id: "cache",
        type: "serviceNode",
        position: { x: 700, y: 100 },
        data: {
          label: "Redis Cache",
          status: "healthy",
          capacity: "15%",
        },
      },
      {
        id: "orders-db",
        type: "serviceNode",
        position: { x: 700, y: 300 },
        data: {
          label: "SQL Orders DB",
          status: "healthy",
          capacity: "65%",
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
  },

  inventory: {
    nodes: [
      {
        id: "monitor",
        type: "serviceNode",
        position: { x: 100, y: 200 },
        data: {
          label: "Warehouse Monitor",
          status: "healthy",
          capacity: "55%",
        },
      },
      {
        id: "tracker",
        type: "serviceNode",
        position: { x: 450, y: 200 },
        data: {
          label: "SKU Tracker",
          status: "healthy",
          capacity: "40%",
        },
      },
    ],
    connections: [
      {
        id: "e1",
        source: "monitor",
        target: "tracker",
        animated: true,
      },
    ],
  },

  notification: {
    nodes: [
      {
        id: "dispatcher",
        type: "serviceNode",
        position: { x: 100, y: 200 },
        data: {
          label: "Alert Dispatcher",
          status: "healthy",
          capacity: "20%",
        },
      },
      {
        id: "gateway",
        type: "serviceNode",
        position: { x: 450, y: 200 },
        data: {
          label: "SMS Gateway",
          status: "degraded",
          capacity: "85%",
        },
      },
      {
        id: "email-queue",
        type: "serviceNode",
        position: { x: 800, y: 200 },
        data: {
          label: "Email Queue",
          status: "healthy",
          capacity: "10%",
        },
      },
    ],
    connections: [
      {
        id: "e1",
        source: "dispatcher",
        target: "gateway",
        animated: true,
      },
      {
        id: "e2",
        source: "gateway",
        target: "email-queue",
        animated: true,
      },
    ],
  }
}