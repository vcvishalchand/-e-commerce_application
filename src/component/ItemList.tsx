import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface ItemListProps {
    items: Item[];
    btnLabel: string,
    details?: boolean;
}

const ItemList: React.FC<ItemListProps> = ({ items, btnLabel, details = false }) => {
    return (
        <Grid container spacing={3}>
            {items.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} style={{ marginTop: '20px' }}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={item.image}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary"
                                sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: "2",
                                    WebkitBoxOrient: "vertical",
                                }}>
                                {item.description}
                            </Typography>
                            <Typography variant="h6" color="primary">
                                ${item.price.toFixed(2)}
                            </Typography>
                            <Button component={Link} to={(details === true) ? `/product/${item.id}` : '/product'} variant="contained" color="primary">
                                {btnLabel}
                            </Button>

                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemList;
