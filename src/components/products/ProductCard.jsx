import { Card, Button, Badge } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext.jsx";

export function ProductCard({ item, onEdit, onDelete }) {
  const { user } = useAuth();
  if (!item) return null;

  const isAdmin = user?.role === "administrador";

  return (
    <Card className="h-100 shadow-sm border-0" style={{ minWidth: "14rem" }}>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2">{item.name}</Card.Title>

        <div className="mb-2">
          <Badge bg="secondary" className="me-1">
            Code: {item.code || "N/A"}
          </Badge>
          <Badge bg={item.stock > 20 ? "success" : "danger"}>
            Stock: {item.stock || 0}
          </Badge>
        </div>

        <Card.Text className="text-truncate mb-3" title={item.description}>
          {item.description || "Sin descripción"}
        </Card.Text>

        {isAdmin && (
          <div className="mt-auto d-flex justify-content-between">
            <Button
              variant="warning"
              size="sm"
              onClick={() => onEdit?.(item)}
              className="me-1 flex-fill"
            >
              Editar
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => onDelete?.(item)}
              className="flex-fill"
            >
              Eliminar
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
