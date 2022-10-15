package com.projetomanoel.siteVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetomanoel.siteVendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
