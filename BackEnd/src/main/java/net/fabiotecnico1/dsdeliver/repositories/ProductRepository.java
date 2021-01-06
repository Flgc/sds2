package net.fabiotecnico1.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import net.fabiotecnico1.dsdeliver.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
List<Product> findAllByOrderByNameAsc();	
}
